//Create a new component
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

// import modules
import  SearchBar from "./components/search_bar";
import VideoList  from "./components/video_list";
import VideoDetails  from "./components/video_details";

const API_KEY = "AIzaSyD8a9RN0PTwX-91fIVKpPSeip4AOlckavk";

class App extends Component {
    constructor(prop){
        super(prop);

        this.state = {
            videos:[],
            selectedVideo:null
        };
        YTSearch({key:API_KEY,term:'surfboards'}, (data) => {            
            this.setState({videos:data,selectedVideo:data[0]});            
        });
        
    }
    videoLinkDetailParent1 = (selectedVideo) =>{
        this.setState({selectedVideo})
    } 
    parentSearch(value,state){
        console.log(state);
        if(this.state.videos){
            console.log(value);
            let videos = this.state.videos;
            videos.filter((video) => {
                if(video.title.toLowerCase().indexOf(value) >= 0){
                    return video;
                }
            });
            this.setState({videos:videos});
        }
    }

    render(){
        return (
        <div>
            <SearchBar parentSearch={() => this.parentSearch(value,this.state)} />
            <VideoDetails video={this.state.selectedVideo} />
            <VideoList videoLinkDetailParent1={this.videoLinkDetailParent1} videos={this.state.videos} />
        </div>
        );
    }
}

//render react dom component
ReactDOM.render(<App />,document.querySelector('.container'));