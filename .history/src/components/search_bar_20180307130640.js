import React, { Component } from "react";

class SearchBar extends Component{
    
    constructor(prop){
        super(prop);
        this.state = {term:''};
    }
    render(){
        return (
            <input onChange={this.onInputChange}/>
            New value: {this.state.term}
        );
    }

    onInputChange(e){
        this.setState({term:e.target.value});
    }
}

export default SearchBar;
