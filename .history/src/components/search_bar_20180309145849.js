import React, { Component } from "react";

class SearchBar extends Component{
    
    constructor(prop){
        super(prop);
        this.state = {term:''};
         this.onInputChange= this.onInputChange.bind(this); 
    }
    render(){
        return (
            <div>
            <input
            placeholder="Search"
            onChange={this.onInputChange.bind(this)}
            />
            New value: {this.state.term}
            </div>
        );
    }

    onInputChange(e){
         this.props.parentSearch(e.target.value);
        
    }
}

export default SearchBar;
