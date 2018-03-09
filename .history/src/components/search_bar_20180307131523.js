import React, { Component } from "react";

class SearchBar extends Component{
    
    constructor(prop){
        super(prop);
        this.state = {term:''};
        this.handleClick = this.handleClick.bind(this); 
    }
    render(){
        return (
            <div>
            <input onChange={this.onInputChange}/>
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
