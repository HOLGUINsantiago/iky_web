import React from "react";
import "./Video.css"; // Assurez-vous que le nom du fichier CSS est correct
import channelLogo from "../../assets/images/channels4_profile.jpg";

const VideoCard = ({
  videoSrc,
  title,
  creator,
  thumbnail,
  likes,
  comments,
  views,
}) => {
  return (
    <div className="main-video">
      <div className="card-video">
        <a href={videoSrc} target="_blank" rel="noopener noreferrer">
          <img src={thumbnail} alt={title} className="video-thumbnail" />
        </a>
        <div className="card_back-video"></div>
        <div className="data-video">
          <div className="text-video">
            {/* Nouveau conteneur pour aligner le logo et les textes */}
            <div className="video-header">
              <img
                src={channelLogo}
                alt={`logo`}
                className="channel-logo" // Classe CSS pour styliser le logo
              />
              <div className="video-info">
                <div className="text_m">{title}</div>
                <div className="text_s">{creator}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="btns">
          <div className="likes">
            <svg viewBox="-2 0 105 92" className="likes_svg">
              <path d="M85.24 2.67C72.29-3.08 55.75 2.67 50 14.9 44.25 2 27-3.8 14.76 2.67 1.1 9.14-5.37 25 5.42 44.38 13.33 58 27 68.11 50 86.81 73.73 68.11 87.39 58 94.58 44.38c10.79-18.7 4.32-35.24-9.34-41.71Z"></path>
            </svg>
            <span className="likes_text">{likes}</span>
          </div>
          <div className="comments">
            <svg
              title="Comment"
              viewBox="-405.9 238 56.3 54.8"
              className="comments_svg"
            >
              <path d="M-391 291.4c0 1.5 1.2 1.7 1.9 1.2 1.8-1.6 15.9-14.6 15.9-14.6h19.3c3.8 0 4.4-.8 4.4-4.5v-31.1c0-3.7-.8-4.5-4.4-4.5h-47.4c-3.6 0-4.4.9-4.4 4.5v31.1c0 3.7.7 4.4 4.4 4.4h10.4v13.5z"></path>
            </svg>
            <span className="comments_text">{comments}</span>
          </div>
          <div className="views">
            <svg title="Views" viewBox="0 0 30.5 16.5" className="views_svg">
              <path d="M15.3 0C8.9 0 3.3 3.3 0 8.3c3.3 5 8.9 8.3 15.3 8.3s12-3.3 15.3-8.3C27.3 3.3 21.7 0 15.3 0zm0 14.5c-3.4 0-6.2-2.8-6.2-6.2C9 4.8 11.8 2 15.3 2c3.4 0 6.2 2.8 6.2 6.2 0 3.5-2.8 6.3-6.2 6.3z"></path>
            </svg>
            <span className="views_text">{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
