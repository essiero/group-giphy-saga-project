import { useState } from "react";
import { useDispatch } from "react-redux";

function FavoritesItem({ favoriteGif }) {
    const dispatch = useDispatch();


    const [category, setCategory] = useState(0)
    const handleInputChange = (value) => {
        console.log('category: ', value);

        dispatch({
            type: 'SAGA/SET_CATEGORY',
            payload: {
                data: value,
                id: favoriteGif.id
            }
        })
    }

  return (
    <>
      <img src={favoriteGif.gif_url}></img>
      <select name="category"
    //   why do we need the id="selectIn" here? do we need it?
                id="selectIn"
                onChange={(e) => handleInputChange(e.target.value)}
                defaultValue={Number(favoriteGif.category_id)}>
        <option value=""></option>
        <option value="1">wild</option>
        <option value="2">uproarious</option>
        <option value="3">poignant</option>
        <option value="4">felicitous</option>
        <option value="5">whimsical</option>
        </select>
    </>
  );
}

export default FavoritesItem;
