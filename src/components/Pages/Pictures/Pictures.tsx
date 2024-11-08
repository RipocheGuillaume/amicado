import React, { useState } from "react";
import { Box } from "@mui/material";
import useSWR from "swr";
import MenuSongs from "../Songs/elements/MenuSongs";
import DisplayPictures from "./GridPictures";

interface EventsType {
  id: number;
  event: string;
  pictures: {
    picture_id: number;
    title: string;
    url: string;
  }[];
}

interface PicturesType {
  id: number;
  title: string;
  url: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Pictures() {
  const [responseChoiceEvent, setResponseChoiceEvent] = useState<number | null>(
    null
  );

  const {
    data: eventsData,
    isLoading: isEventsLoading,
    error: eventsError,
  } = useSWR<EventsType[]>("http://localhost:3000/events", fetcher);

  const {
    data: selectedEvent,
    isLoading: isPicturesLoading,
    error: picturesError,
  } = useSWR<EventsType>(
    responseChoiceEvent !== null
      ? `http://localhost:3000/events/${responseChoiceEvent}`
      : null,
    fetcher
  );

  if (eventsError) return <p>Erreur lors du chargement des événements</p>;
  if (picturesError) return <p>Erreur lors du chargement des images</p>;

  const eventsForSelected = eventsData || [];
  const picturesForSelectedEvent: PicturesType[] = (
    selectedEvent?.pictures || []
  ).map((picture) => ({
    id: picture.picture_id,
    title: picture.title,
    url: picture.url,
  }));

  return (
    <>
      {isEventsLoading ? (
        <p>Chargement des événements...</p>
      ) : (
        <MenuSongs
          arrayData={eventsForSelected.map((event) => ({
            id: event.id,
            display: event.event,
          }))}
          setResponseChoice={setResponseChoiceEvent}
        />
      )}
      {responseChoiceEvent !== null &&
        (isPicturesLoading ? (
          <p>Chargement des images...</p>
        ) : (
          <DisplayPictures picturesData={picturesForSelectedEvent} />
        ))}
    </>
  );
}

export default Pictures;
