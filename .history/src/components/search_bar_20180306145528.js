import React, { Component } from "react";

class SearchBar extends Component{
    render(){
        return (
            <input onChange={this.onInputChange}/>
        );
    }

    onInputChange(){
        alert(e.target);
    }
}

export default SearchBar;
