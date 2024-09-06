//style
import "./Grid.css";

//Material UI
import { Avatar } from "@mui/material";

const Grid = ({ header, display, videos }) => {
  const videoItems = videos.items;
  const gridContents = videoItems.map((video) => (
    <li key={video.id}>
      <div className="list-image">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={`${video.snippet.title} thumbnail`}
        />
      </div>

      <div className="list-info">
        <div className="list-avatar">
          <Avatar />
        </div>
        <div className="list-description">
          <h2>{video.snippet.title}</h2>
          <h4>{video.snippet.channelTitle}</h4>
          <h4>{`3.6 million view . 3 month ago`}</h4>
        </div>
      </div>
    </li>
  ));
  return (
    <div className="grid-container">
      <h1>{header}</h1>
      <ul className="grid-show">{gridContents}</ul>
    </div>
  );
};

export default Grid;
