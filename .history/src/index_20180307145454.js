//Create a new component
import React from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

// import modules
import  SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyD8a9RN0PTwX-91fIVKpPSeip4AOlckavk";

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

//render react dom component
ReactDOM.render(<App />,document.querySelector('.container'));