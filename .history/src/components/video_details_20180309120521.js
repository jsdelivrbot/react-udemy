import React, { Component } from "react";

class VideoDetails extends Component {
    constructor(props) {
        super(props);        
    }
    render() {
        if(!this.props.video){
            return <div>Loading...</div>;
        }
        console.log('xx');
        const video = this.props.video;
        const videoId = video.id.videoId;
        const videoUrl = `https://www.youtube.com/embed/${videoId}`;
        return (
            <div className="video-details col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={videoUrl}>
                        
                    </iframe>
                </div>
                <div className="details">
                        <h2>{video.snippet.title}</h2>
                        <div>{video.snippet.description}</div>                   
                </div>                
            </div>
         );
    }
}
 
export default VideoDetails;
