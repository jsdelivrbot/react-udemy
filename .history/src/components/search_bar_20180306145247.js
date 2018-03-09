import React, { Component } from "react";

class SearchBar extends Component{
    render(){
        return (
            <input />
        );
    }

    onInputChange(e){
        alert(e.target);
    }
}

export default SearchBar;
