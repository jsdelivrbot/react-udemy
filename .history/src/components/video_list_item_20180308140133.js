import React, { Component } from "react";

class VideoListItems extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        console.log(this.props);
        return (
            
            <li>{this.prop.video}</li>
            
          )
    }
}
 

export default VideoListItems;