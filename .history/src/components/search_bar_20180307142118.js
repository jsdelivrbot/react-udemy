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
            <input onChange={this.onInputChange.bind(this)}/>
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
