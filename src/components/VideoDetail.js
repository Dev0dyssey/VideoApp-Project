import React from 'react';

const VideoDetail = ({ video }) => {
    // CONDITIONAL RENDER TO PREVENT THE ERROR OF "CANNOT READ PROPERTY 'SNIPPET' OF NULL"
    // BECAUSE THE ONSELECTEDVIDEO STATE IS INITALISED WITH 'NULL' VALUE
    if(!video){
        return <div>Loading..</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc}/>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;