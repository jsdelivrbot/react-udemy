import React, {Component} from "react";

// class VideoList extends Component{

//     constructor(props){
//         console.log('2');
//         console.log(props.videos);
//         super(props);
//     }
//     render(){
//         return (
//             <ul className="col-md-4 list-group">
//                 <li>List of videos</li>
//             </ul>
//         );
//     }
// }
const VideoList = (props)=>{
    console.log('1');
    console.log(props);
    return (
         <ul className="col-md-4 list-group">
                 <li>List of videoss</li>
             </ul>
    )
}
export default VideoList;