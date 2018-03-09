import React, { Component } from "react";

class VideoListItems extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        console.log('child');
        console.log(this.props);
        return (            
            <li>{this.props.video.kind}</li>            
          )
    }
}
 

export default VideoListItems;