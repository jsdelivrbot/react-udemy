import React, {Component} from "react";

class VideoList extends Component{

    constructor(props){
        super(props);
        console.log('2');
        console.log(props.videos);
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