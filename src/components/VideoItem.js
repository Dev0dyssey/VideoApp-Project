import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    return(
        // ONVIDEOSELECT PASSED DOWN FROM <VIDEOLIST /> WHICH HAD IT PASSED DOWN FROM <APP /> ... KNOWN AS DEEPLY NESTED CALLBACK
        // PASS IN THE VIDEO VALUE THAT WAS GOTTEN THROUGH THE MAP FUNCTION ITERATING OVER THE STATE.VIDEOS ARRAY ... EACH ELEMENT IN THE ARRAY ASSIGNED TO VIDEO OBJECT
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img 
                alt={video.snippet.title} 
                className="ui image" 
                src={video.snippet.thumbnails.medium.url}
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
            
        </div>
    );
};

export default VideoItem;