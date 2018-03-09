import React, { Component } from "react";

class SearchBar extends Component{
    
    constructor(prop){
        super(prop);
        this.state = {term:''};
    }
    render(){
        return (
            <div>
            <input onChange={e => this.setState({term:e.target.value})}/>
            New value: {this.state.term}
            </div>
        );
    }

    onInputChange(e){
        this.setState({term:e.target.value});
    }
}

export default SearchBar;
