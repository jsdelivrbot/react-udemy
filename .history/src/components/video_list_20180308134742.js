import React, {Component} from "react";

import  from "./video_list_item";
class VideoList extends Component{


    constructor(props){
        super(props);
    }
    const VideoItems = this.props.map((video) => {
        <VideoListItems video = {video} />
    });
    render(){
        return (
            <ul className="col-md-4 list-group">
                <li>Videos</li>
                <
            </ul>
        );
    }
}
export default VideoList;