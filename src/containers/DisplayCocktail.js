import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CocktailRate from "./../components/MainPage/CocktailRate";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { useSnackbar } from "notistack";

const DisplayCocktail = ({ favCocktails, setFavCocktails, ...rest }) => {
  const [fav, setFav] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const handleClickSuccess = (variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(`${rest.name} added to your favorite cocktail!`, {
      variant,
    });
  };

  const handleClickError = (variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(`${rest.name} removed from your favorite cocktail!`, {
      variant,
    });
  };

  return (
    <>
      <Link to={`/recipePage/${rest.name}`}>
        <img src={rest.img} alt="Cocktail Thumb" />
      </Link>
      <CocktailRate>{rest.name}</CocktailRate>
      {fav ? (
        <FontAwesomeIcon
          style={{ color: "red" }}
          onClick={() => {
            handleClickError("error");
            setFav(!fav);
            const filteredCocktails = favCocktails.filter(
              (favcocktail) => rest.id !== favcocktail.id
            );
            setFavCocktails(filteredCocktails);
          }}
          icon="heart"
        />
      ) : (
        <FontAwesomeIcon
          onClick={() => {
            handleClickSuccess("success");
            setFav(!fav);
            setFavCocktails([
              ...favCocktails,
              { id: rest.id, img: rest.img, title: rest.name },
            ]);
            // localStorage.setItem("myfav",JSON.stringify({ id: rest.id, img: rest.img, title: rest.name }))
            // const result=JSON.parse(localStorage.getItem("myfav"));
            // console.log("Resultat MyFav")
            // console.log(result)
          }}
          icon={faHeart}
        />
      )}
    </>
  );
};

export default DisplayCocktail;
