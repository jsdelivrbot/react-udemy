import React, {Component} from "react";

class VideoList extends Component{
    constructor(prop){
        console.log('2');
        console.log(prop.videos);
        super(prop);
    }
    render(){
        return (
            <ul className="col-md-4 list-group">
                <li>List of videos</li>
            </ul>
        );
    }
}
export default VideoList;