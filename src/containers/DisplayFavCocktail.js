import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CocktailRate from "./../components/MainPage/CocktailRate";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useSnackbar } from "notistack";

const DisplayFavCocktail = ({ favCocktails, setFavCocktails, ...rest }) => {
  const [fav, setFav] = useState(true);

  const { enqueueSnackbar } = useSnackbar();

  const handleClickError = (variant) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(`${rest.name} removed from your favorites!`, {
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
          style={{ color: "red" }}
          onClick={() => {
            setFav(!fav);
            setFavCocktails([
              ...favCocktails,
              {
                id: rest.id,
                img: rest.img,
                title: rest.title,
                favStatus: true,
              },
            ]);
          }}
          icon={faHeart}
        />
      )}
    </>
  );
};

export default DisplayFavCocktail;
