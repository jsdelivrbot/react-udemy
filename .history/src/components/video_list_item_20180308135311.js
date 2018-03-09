import React, {Component} from "react";

class VideoListItems extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <li>{this.prop.video.kind}</li>
          )
    }
}
 

export default VideoListItems;