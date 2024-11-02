import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import MenuSongs from './elements/MenuSongs';
import MusicPlayerSlider from './elements/MusicPlayerSlider';
import { Box } from '@mui/material';

interface SongType {
  id: number;
  title: string;
  author: string;
  image: string;
}

interface VoiceType {
  id: number;
  voice: string;
  link: string;
}

interface YearsType {
  id: number;
  year: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Songs() {
  const [responseChoiceYear, setResponseChoiceYear] = useState<number>(-1);
  const [responseChoiceSong, setResponseChoiceSong] = useState<number>(-1);
  const [initChoice, setInitChoice] = useState<boolean>(false);

  const {
    data: yearsData,
    isLoading: isYearsLoading,
    error: yearsError,
  } = useSWR('http://localhost:3000/years', fetcher);

  const {
    data: songsData,
    isLoading: isSongsLoading,
    error: songsError,
  } = useSWR<SongType[]>(
    responseChoiceYear !== -1
      ? `http://localhost:3000/song/${responseChoiceYear}`
      : null,
    fetcher
  );

  const {
    data: voiceData,
    isLoading: isVoiceLoading,
    error: voiceError,
  } = useSWR<VoiceType[]>(
    responseChoiceSong !== -1
      ? `http://localhost:3000/voice/${responseChoiceSong}`
      : null,
    fetcher
  );

  useEffect(() => {
    setResponseChoiceSong(-1);
    setInitChoice(true);
    return () => setInitChoice(false);
  }, [responseChoiceYear]);

  if (yearsError) return <p>Erreur lors du chargement des années</p>;
  if (songsError) return <p>Erreur lors du chargement des chansons</p>;
  if (voiceError) return <p>Erreur lors du chargement des voix</p>;

  const yearsForSelected: YearsType[] = Array.isArray(yearsData)
    ? yearsData
    : [];
  const songsForSelectedYear: SongType[] = Array.isArray(songsData)
    ? songsData
    : [];
  const voiceForSelectedSong: VoiceType[] = Array.isArray(voiceData)
    ? voiceData
    : [];
  console.log(voiceData);

  return (
    <>
      {isYearsLoading ? (
        <p>Chargement des années...</p>
      ) : (
        <MenuSongs
          arrayData={yearsForSelected.map((year) => ({
            id: year.id,
            display: year.year,
          }))}
          setResponseChoice={setResponseChoiceYear}
        />
      )}
      {responseChoiceYear !== -1 &&
        (isSongsLoading ? (
          <p>Chargement des chansons...</p>
        ) : (
          <MenuSongs
            arrayData={songsForSelectedYear.map((song) => ({
              id: song.id,
              display: song.title,
            }))}
            setResponseChoice={setResponseChoiceSong}
            initChoice={initChoice}
          />
        ))}
      {responseChoiceSong !== -1 &&
        (isVoiceLoading ? (
          <p>Chargement des voix...</p>
        ) : (
          voiceForSelectedSong.map((voice) => {
            const song = songsForSelectedYear.find(
              (s) => s.id === responseChoiceSong
            );
            return (
              song && (
                <div key={voice.id}>
                  <Box sx={{ width: 150, height: 150 }}>
                    <img src={song.image} alt={song.title} />
                  </Box>

                  <MusicPlayerSlider voice={voice} song={song} />
                </div>
              )
            );
          })
        ))}
    </>
  );
}

export default Songs;
