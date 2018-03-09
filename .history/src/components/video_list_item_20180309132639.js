import React, { Component } from "react";

class VideoListItems extends Component {
    constructor(props) {
        super(props);
        
    }
    videoLinkDetail = (video) => {
        console.log(video);
        this.props.videoLinkDetailParent2(video);
    }
    render() {
        const video = this.props.video;
        const imageUrl = video.snippet.thumbnails.default.url;
        return (            
            <li onClick = {(video) => this.videoLinkDetail(video)} className="list-group-item"> 
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imageUrl} alt="abc"/>
                    </div>
                    <div className="media-body">
                        <div className="media=heading">
                            {video.snippet.title}
                        </div>
                    </div>
                </div>
            </li>            
          );

         
    }
}
 

export default VideoListItems;