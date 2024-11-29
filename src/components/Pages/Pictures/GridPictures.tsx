import { Box, ImageList } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./GridPicture.css";

interface DisplayPicturesProps {
  picturesData: {
    id: number;
    title: string;
    url: string;
  }[];
}

function GridPictures({ picturesData }: DisplayPicturesProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedItem = picturesData.find((item) => item.id === selectedId);

  return (
    <>
      <ImageList variant="masonry" cols={4} gap={8} sx={{ height: "100%" }}>
        {picturesData.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id.toString()}
            onClick={() => setSelectedId(item.id)}
          >
            <img
              src={`${item.url}?w=248&fit=crop&auto=format`}
              alt={`trombinoscope en petit de ${item.title}`}
            />
            <Box>{item.title}</Box>
          </motion.div>
        ))}
      </ImageList>
      <AnimatePresence>
        {selectedItem && (
          <motion.div layoutId={selectedItem.id.toString()} className="overlay">
            <motion.div className="modal">
              <img
                src={selectedItem.url}
                alt={`trombinoscope en grand de ${selectedItem.title}`}
                className="image"
              />
              <Box>{selectedItem.title}</Box>

              <motion.button
                onClick={() => setSelectedId(null)}
                className="button_close"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default GridPictures;
