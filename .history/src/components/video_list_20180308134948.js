import React, {Component} from "react";

import VideoListItems from "./video_list_item";

class VideoList extends Component{


    constructor(props){
        super(props);
    }
   
    render(){
         const VideoItems = this.props.map((video) => {
        
    });
        return (
            <ul className="col-md-4 list-group">
                <li>Videos</li>
                
            </ul>
        );
    }
}
export default VideoList;