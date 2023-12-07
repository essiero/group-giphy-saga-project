import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function SearchList() {
    const gifList = useSelector(store => store.gifSearchList)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: 'SAGA/GET_SEARCHLIST_GIFS'
        })
    },[])
    return (      
        <div>           
            {gifList.map((gif) => (
                <img src={gif.images.original.url}></img>
            ))}
        </div>
    )
}

export default SearchList;