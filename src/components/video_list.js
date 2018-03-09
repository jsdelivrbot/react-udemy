import React, {Component} from "react";

import VideoListItems from "./video_list_item";

class VideoList extends Component{

    constructor(props){
        super(props);
    }
   
    render(){
         const VideoItems = this.props.videos.map((video) => {
             return <VideoListItems videoLinkDetailParent2={this.props.videoLinkDetailParent1} key={video.etag} video = {video} />
        });
        return (
            <ul className="col-md-4 list-group">
                {VideoItems}          
            </ul>
        );
    }
}
export default VideoList;