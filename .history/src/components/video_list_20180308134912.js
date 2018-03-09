import React, {Component} from "react";

import VideoListItems from "./video_list_item";

class VideoList extends Component{


    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <ul className="col-md-4 list-group">
                <li>Videos</li>
                
            </ul>
        );
    }
}
export default VideoList;