class VideoDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="video-details col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item">
                        
                    </iframe>
                </div>
                <div className="details">
                        
                </div>                
            </div>
         )
    }
}
 
export default VideoDetails
<div className="video-details col-md-8">
    <div className="embed-responsive embed-responsive-16by9">
            <iframe className="d-responsive-item">
                <div className="details">

                </div>
            </iframe>
    </div>
</div>;