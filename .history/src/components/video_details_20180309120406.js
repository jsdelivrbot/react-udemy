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
        console.log(this.props.video);
        const videoId = this.props.video.id.videoId;
        const videoUrl = `https://www.youtube.com/embed/${videoId}`;
        return (
            <div className="video-details col-md-8">
                                
            </div>
         );
    }
}
 
export default VideoDetails;
