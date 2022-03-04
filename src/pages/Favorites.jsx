import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { auth } from "../auth/firebase-config";

export default function Favorites() {
  const { favs, deleteFav } = useContext(AuthContext);

  return (
    <div className="card-container">
      {favs.map((obj) => (
        <div key={obj.data.product_id}>
          <div className="card p-2">
            <img className="card-img-top" src={obj.data.image} alt="" />
            <div className="card-body">
              <h6 className="card-title">{obj.data.title}</h6>
              <div className="d-flex  justify-content-around align-items-center mb-4">
                <span className="card-text">{obj.data.price}$</span>

                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="icon bi bi-cart4 mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                </span>
              </div>

              <div className="d-flex justify-content-between">
                <svg
                  onClick={() => deleteFav(obj.data.product_id)}
                  // onClick={() => dellFav(id)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-balloon-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"
                  />
                </svg>
                <span>More</span>
              </div>
            </div>
            <div className="card-over">
              <h5>{obj.data.category} </h5>
              <p>{obj.data.description} </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}