import React from "react";
import { VideoCardContainer } from "./styles";

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7"
  );
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(
    videoURL
  )}/hqdefault.jpg`;
  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank" style={{ borderColor: categoryColor || "#62D2F9" }}
      //title={videoTitle}
      >
        <span className="titulo">{videoTitle}</span>
    </VideoCardContainer>
  );
}

export default VideoCard;
