import {useEffect, useRef} from "react";
import VideoPlayer from './VideoPlayer'


const MyVideoPlayer = ({ src, isPaused, currentTime, onPlay, onPause }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      if (isPaused) {
        playerRef.current.player.pause();
      } else {
        playerRef.current.player.play();
      }
      playerRef.current.player.currentTime(currentTime);
    }
  }, [isPaused, currentTime]);

  return (
    <VideoPlayer
      ref={playerRef}
      controls={true}
      src={src}
      onReady={(player) => {
        player.on('play', () => {onPlay(player.currentTime())});
        player.on('pause', () => {onPause(player.currentTime())});
      }}
    />
  );
};

export default MyVideoPlayer