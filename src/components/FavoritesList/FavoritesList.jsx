import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoritesItem from '../FavoritesItem/FavoritesItem';

function FavoritesList() {
  useEffect(() => {
    getFavorites();
  }, []);

  const dispatch = useDispatch();
  const favoritesList = useSelector((store) => store.gifFavoritesList)

  const getFavorites = () => {
    dispatch({
      type: "SAGA/GET_FAVORITES",
    });
  };
  return(
    <div>
  {favoritesList.map((favoriteGif) => (
    <FavoritesItem key={favoriteGif.id} favoriteGif={favoriteGif}/>
  ))}
  </div>
  )
}

export default FavoritesList;
