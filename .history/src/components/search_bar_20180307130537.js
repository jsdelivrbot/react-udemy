import React, { Component } from "react";

class SearchBar extends Component{
    
    constructor(prop){
        super(prop);
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
