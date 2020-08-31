import React from "react";
import tonyAvatar from "../img/tonyAvatar.png";

function ProfilePageContent() {
  return (
    <div>
      <h1>My Info</h1>
      <div className="profilpage-box">
        <div>
          <h3>LastName : Stark</h3>
          <h3>FirstName : Tony</h3>
          <h3>Email: iron@man.com</h3>
          <button>Change my info</button>
        </div>
        <div>
          <img src={tonyAvatar} alt="Avatar" width="170" />
        </div>
      </div>
    </div>
  );
}

export default ProfilePageContent;
