import React, { Component } from "react";

class VideoListItems extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const video = this.props.video;
        return (            
            <li className="list-group-item"> 
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src="" alt="abc"/>
                    </div>
                    <div className="media-body">
                        <div className="media=heading"></div>
                    </div>
                </div>
            </li>            
          )
    }
}
 

export default VideoListItems;