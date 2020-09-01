import React from "react";
import tonyAvatar from "../img/tonyAvatar.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProfilePageContent() {
  return (
    <div>
      <div className="profilpage-box">
        <div>
          <h3>LastName : Stark</h3>
          <h3>FirstName : Tony</h3>
          <h3>Email: iron@man.com</h3>
          <button>Update my profile</button>
        </div>
        <div>
          <img src={tonyAvatar} alt="Avatar" width="170" />
        </div>
      </div>
      <hr />
      <Link to="/favoritepage">
        <div className="profilepage-arrow">
          <FontAwesomeIcon icon="heart" size="1x" color="#00B9CD" />
          <h2>My Favorite Cocktails</h2>
        </div>
      </Link>
      <Link to="/shoppinglistpage">
        <div className="profilepage-arrow">
          <FontAwesomeIcon icon="list" size="1x" color="#00B9CD" />
          <h2>My Shopping List</h2>
        </div>
      </Link>
    </div>
  );
}

export default ProfilePageContent;
