import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, [audioRef]);

  return <audio ref={audioRef} src={src} autoPlay loop />;
};

export default AudioPlayer;
