import React, { Component } from "react";

class VideoListItems extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const video = this.props.video;
        return (            
            <li>{this.props.video.kind}</li>            
          )
    }
}
 

export default VideoListItems;