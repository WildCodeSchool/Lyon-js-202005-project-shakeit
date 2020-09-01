import React, { useState, useEffect } from "react";
import tonyAvatar from "../img/tonyAvatar.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProfilePageContent() {
  const [pseudo, setPseudo] = useState(
    localStorage.getItem("myPseudoInLocalStorage") || ""
  );
  const [email, setEmail] = useState(
    localStorage.getItem("myEmailInLocalStorage") || ""
  );

  useEffect(() => {
    localStorage.setItem("myPseudoInLocalStorage", pseudo);
    localStorage.setItem("myEmailInLocalStorage", email);
  }, [pseudo, email]);

  const onChangePseudo = (event) => {
    setPseudo(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div>
      <div className="profilpage-box">
        <div>
          <img src={tonyAvatar} alt="Avatar" width="170" />
        </div>
        <div>
          <form>
            <p>
              <label htmlFor="pseudo">Pseudo </label>
              <input
                value={pseudo}
                onChange={onChangePseudo}
                type="text"
                name="pseudo"
                id="pseudo"
                placeholder="Tony Stark"
                required
              />
            </p>

            <p>
              <label htmlFor="courriel">Email </label>
              <input
                value={email}
                onChange={onChangeEmail}
                type="email"
                name="courriel"
                id="courriel"
                required
                placeholder="iron@man.com"
              />
            </p>

            <input
              className="button-submit"
              type="submit"
              value="Update my profile"
            />
          </form>
        </div>
      </div>
      <hr />
      <div className="profil-box-bottom">
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
    </div>
  );
}

export default ProfilePageContent;
