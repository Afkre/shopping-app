import { createContext, useState, useEffect } from "react";
import { auth, database } from "../auth/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { data } from "../data";
import Favorites from "../pages/Favorites";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState();
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    getFavs();
  }, []);

  const getFavs = async () => {
    let favs = [];
    const colRef = collection(database, "favs");
    const favSnapshot = await getDocs(colRef);

    console.log(favSnapshot);

    favSnapshot.docs.forEach((doc) => {
      favs.push({ ...doc.data(), id: doc.id });
    });
    console.log(favs);
    setFavs(favs);
  };

  const addFav = (id) => {
    const dataToAdd = data.filter((el) => el.product_id == id);
    console.log("add");
    const colRef = collection(database, "favs");
    console.log(dataToAdd);
    addDoc(colRef, { data: dataToAdd[0] }).then((doc) => {
      favs.push({ data: dataToAdd[0], id: doc.id });
      setFavs(favs);
    });
  };

  const deleteFav = (id) => {
    console.log("delete");
    console.log(id, favs);
    const dataToDelete = favs.filter((el) => el.data.product_id == id);
    // console.log(dataToDelete[0]);
    const docRef = doc(database, "favs", dataToDelete[0].id);
    deleteDoc(docRef).then(() => {
      let newFiltered = favs.filter((el) => el.data.product_id != id);
      setFavs(newFiltered);
    });
  };

  return (
    <AuthContext.Provider value={{ currentUser, favs, addFav, deleteFav }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;