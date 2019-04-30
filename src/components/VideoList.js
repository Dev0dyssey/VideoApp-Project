import React from 'react';
import VideoItem from './VideoItem';

// DESTRUCTURE THE PROPS OBJECT TO ONLY GET THE VIDEO PROPERTY 
// MAP OVER EACH VIDEOS OBJECT AND ASSIGN IT TO A NEW VIDEO OBJECT INSIDE THE MAP FUNCTION, TO SHOW INDIVIDUAL RESULTS
const VideoList = ({onVideoSelect, videos}) => {
    const renderedList = videos.map((video)=>{
        return <VideoItem 
            key={video.id.videoId} 
            onVideoSelect={onVideoSelect} 
            video={video} 
        />
    });

    return(
        // WE NEED TO SHOW THE RENDEREDLIST (OR ANY VARIABLE WE NAMED) OF THE MAP FUNCTION CALL
        <div className="ui relaxed divided list">{renderedList}</div>
    )
}

export default VideoList;