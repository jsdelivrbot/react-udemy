import React, { Component } from "react";

class SearchBar extends Component{
    
    constructor(props){
        super(props);
        // this.onInputChange= this.onInputChange.bind(this); 
        // this.state = {term:""};
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

    onInputChange(term){
        //this.setState({term});
        this.props.parentSearch(term);        
    }
}

export default SearchBar;
