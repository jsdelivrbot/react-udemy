import React, { Component } from "react";

class VideoListItems extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        console.log('child');
        console.log(this.props);
        return (            
            <li>aaaa</li>            
          )
    }
}
 

export default VideoListItems;