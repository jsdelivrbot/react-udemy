import React, { Component } from "react";

class SearchBar extends Component{
    
    constructor(props){
        super(props);
        // this.onInputChange= this.onInputChange.bind(this); 
    }
    render(){
        return (
            <div>
            <input
            placeholder="Search"
            onChange={(e) => this.onInputChange(e.target.value)}
            />
            </div>
        );
    }

    onInputChange(e){
        this.setState({term})
         this.props.parentSearch(e.target.value);        
    }
}

export default SearchBar;
