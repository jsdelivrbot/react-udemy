class VideoDetails extends Component {
    constructor(props) {
        super(props);        
    }
    render() { 
        return ( 
            <div className="video-details col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item">
                        
                    </iframe>
                </div>
                <div className="details">
                        <div>{video.snippet.title}</div>
                        {video.snippet.description}                        
                </div>                
            </div>
         )
    }
}
 
export default VideoDetails;
