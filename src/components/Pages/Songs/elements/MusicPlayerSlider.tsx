import * as React from "react";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

interface MusicPlayerSliderProps {
  voice: { id: number; voice: string; link: string };
}

export default function MusicPlayerSlider({ voice }: MusicPlayerSliderProps) {
  return (
    <AudioPlayer
      // style={{ width: "300px" }}
      style={{
        width: "auto",
        borderRadius: "10px",
        backgroundColor: "#F7F6CF",
        padding: "5px",
        margin: "20px",
      }}
      autoPlay={false}
      // layout="horizontal"
      src={voice.link}
      showJumpControls={false}
      header={`${voice.voice}`}
      footer=""
    />
  );
}
