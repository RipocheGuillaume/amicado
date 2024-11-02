import * as React from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface MusicPlayerSliderProps {
  voice: { voice: string; link: string };
  song: { title: string; author: string; image: string };
}

export default function MusicPlayerSlider({
  voice,
  song,
}: MusicPlayerSliderProps) {
  return (
    <AudioPlayer
      // style={{ width: "300px" }}
      style={{ borderRadius: '1rem' }}
      autoPlay={false}
      // layout="horizontal"
      src={voice.link}
      showJumpControls={false}
      header={`${song.title} par ${song.author} pour ${voice.voice}`}
      footer=""

      // other props here
    />
  );
}
