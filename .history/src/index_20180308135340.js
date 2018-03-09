//Create a new component
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

// import modules
import  SearchBar from "./components/search_bar";
import VideoList  from "./components/video_list";

const API_KEY = "AIzaSyD8a9RN0PTwX-91fIVKpPSeip4AOlckavk";

class App extends Component {
    constructor(prop){
        super(prop);

        this.state = {videos:[]};
        YTSearch({key:API_KEY,term:'surfboards'}, (data) => {
            
            this.setState({videos:data});
            
        });
    }
    render(){
        return (
        <div>
            <SearchBar />
            <VideoList videos={this.state.videos} />
        </div>
        );
    }
}

//render react dom component
ReactDOM.render(<App />,document.querySelector('.container'));