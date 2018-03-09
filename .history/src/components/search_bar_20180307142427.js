import React, { Component } from "react";

class SearchBar extends Component{
    
    constructor(prop){
        super(prop);
        this.state = {term:''};
        // this.onInputChange= this.onInputChange.bind(this); 
    }
    render(){
        return (
            <div>
            <input defaultValue="aaaa" />
            New value: {this.state.term}
            </div>
        );
    }

    onInputChange(e){
        console.log(this);
        this.setState({term:e.target.value});
    }
}

export default SearchBar;
