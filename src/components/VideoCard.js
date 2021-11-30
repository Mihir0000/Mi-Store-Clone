import React from "react";
import "../styles/VideoCard.css";

const VideoCard = ({ image, name, index }) => {
    return (
        <div className="videoCard" style={{ backgroundImage: `url(${image})` }}>
            <a href="/">
                <i className="fas fa-play"></i>
            </a>
            <p>{name}</p>
        </div>
    );
};

export default VideoCard;
