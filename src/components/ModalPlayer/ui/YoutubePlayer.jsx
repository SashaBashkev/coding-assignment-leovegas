import ReactPlayer from "react-player";

const YoutubePlayer = ({ videoKey }) => (
  <ReactPlayer
    className="video-player"
    url={`https://www.youtube.com/watch?v=${videoKey}`}
    controls
    playing
    data-testid="youtube-player"
  />
);

export default YoutubePlayer;

