import React, {Component} from "react";

import VideoListItems from "./video_list_item";

class VideoList extends Component{

    constructor(props){
        super(props);
    }
   
    render(){
        //  const VideoItems = this.props.videos.map((video) => {
        //      <VideoListItems video = {video} />
        // });
        console.log(this.props.length?this.props.videos:{});
        return (
            <ul className="col-md-4 list-group">
=-                
            </ul>
        );
    }
}
export default VideoList;