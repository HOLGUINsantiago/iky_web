import React, { useEffect, useState } from "react";
import axios from "axios";
import "./YoutubeVideo.css";
import VideoCard from "./Video.js";

const YOUTUBE_API_KEY = "AIzaSyC61aWKaaEty6YE_inhmCAltnbkhctzWAg";
const CHANNEL_ID = "UCFzdZT1q7zZu8gFbOTYLUew";

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          {
            params: {
              key: YOUTUBE_API_KEY,
              channelId: CHANNEL_ID,
              part: "snippet,id",
              order: "date",
              maxResults: 5,
            },
          },
        );

        const videoIds = response.data.items
          .map((item) => item.id.videoId)
          .filter((id) => id);

        // Fetch video details
        const detailsResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos`,
          {
            params: {
              key: YOUTUBE_API_KEY,
              part: "snippet,statistics",
              id: videoIds.join(","),
            },
          },
        );

        // Fetch channel details to get the logo
        const channelResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels`,
          {
            params: {
              key: YOUTUBE_API_KEY,
              id: CHANNEL_ID,
              part: "snippet",
            },
          },
        );

        const channelLogo =
          channelResponse.data.items[0].snippet.thumbnails.default.url;

        const fetchedVideos = detailsResponse.data.items.map((item) => ({
          videoSrc: `https://www.youtube.com/embed/${item.id}`,
          title: item.snippet.title,
          creator: item.snippet.channelTitle,
          thumbnail: item.snippet.thumbnails.high.url,
          likes: item.statistics.likeCount,
          comments: item.statistics.commentCount,
          views: item.statistics.viewCount,
          channelLogo: channelLogo, // Add the channel logo here
        }));

        setVideos(fetchedVideos);
      } catch (error) {
        console.error("Error fetching videos:", error.message);
        if (error.response) {
          console.log("Response data:", error.response.data);
          console.log("Response status:", error.response.status);
          console.log("Response headers:", error.response.headers);
        }
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="video-container">
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          videoSrc={video.videoSrc}
          title={video.title}
          creator={video.creator}
          thumbnail={video.thumbnail}
          likes={video.likes}
          comments={video.comments}
          views={video.views}
          channelLogo={video.channelLogo} // Pass the channel logo to the VideoCard component
        />
      ))}
    </div>
  );
};

export default YouTubeVideos;
