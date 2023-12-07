import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function SearchList() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: 'SAGA/GET_SEARCHLIST_GIFS'
        })
    })
}

export default SearchList;