import React, {Component} from "react";

class VideoListItems extends Component {
    constructor(props) {
        console.log('1');
        super(props);
        
    }
    render() {
        console.log(this.props);
        return (
            <li>{this.prop.video.kind}</li>
          )
    }
}
 

export default VideoListItems;