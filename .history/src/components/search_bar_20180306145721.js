import React, { Component } from "react";

class SearchBar extends Component{
    constructor(){
        console.log('aabb');
    }
    render(){
        return (
            <input onChange={this.onInputChange}/>
        );
    }

    onInputChange(e){
        console.log(e.target.value);
    }
}

export default SearchBar;
