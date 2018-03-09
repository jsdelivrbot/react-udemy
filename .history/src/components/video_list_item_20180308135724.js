import React, {Component} from "react";

class VideoListItems extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        console.log(this.props);
        return (
            <div>
            <li>{this.prop.video.kind}</li>
            </div>
          )
    }
}
 

export default VideoListItems;