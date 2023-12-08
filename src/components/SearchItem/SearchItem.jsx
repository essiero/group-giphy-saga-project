import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  Button  from "react-bootstrap/Button";

function SearchItem ({gif}) {
    const dispatch = useDispatch();

    const dispatchFavorite = () => {
        console.log('url should be:', gif.images.original.url)
        dispatch({
        type: 'SAGA/ADD_NEW_FAVORITE',
        payload: gif.images.original.url
    })}

    return (
        <>
        <img src={gif.images.original.url}></img>
        <Button variant="primary" onClick={dispatchFavorite}>FAV that</Button>
        </>
    )
}

export default SearchItem