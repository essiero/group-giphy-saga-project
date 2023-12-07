import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchItem from "../SearchItem/SearchItem";

function SearchList() {
    const gifList = useSelector(store => store.gifSearchList)
    const dispatch = useDispatch();

    const [query, setQuery] = useState('');

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
        console.log('Query:', query)
    }

     
        const dispatchQuery = () => {
            dispatch({
            type: 'SAGA/GET_SEARCHLIST_GIFS',
            payload: query
        }
        )}
    return (      
        <div>
            <input 
            placeholder="Enter search query here" 
            value={query}
            onChange={handleQueryChange}></input>
            <button onClick={dispatchQuery} type="submit">Search</button>
            <div id="gallery">         
            {gifList.map((gif) => (
                <SearchItem gif={gif} />
            ))}</div> 
        </div>
    )
}

export default SearchList;