import React, { Component } from "react";

class VideoDetails extends Component {
    constructor(props) {
        super(props);        
    }
    render() { 
        if(!this.props.video){
            return <div>Loading...</div>;
        }
        
    }
}
 
export default VideoDetails;
