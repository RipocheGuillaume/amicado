import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ImageList } from "@mui/material";
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
  console.log(picturesData);
  const selectedItem = picturesData.find((item) => item.id === selectedId);

  return (
    <>
      <ImageList variant="masonry" cols={8} gap={8} sx={{ height: "100%" }}>
        {picturesData.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id.toString()}
            onClick={() => setSelectedId(item.id)}
          >
            <img
              src={`${item.url}?w=248&fit=crop&auto=format`}
              alt={`photo de ${item.title}`}
            />
          </motion.div>
        ))}
      </ImageList>
      <AnimatePresence>
        {selectedItem && (
          <motion.div layoutId={selectedItem.id.toString()} className="overlay">
            <motion.div className="modal">
              <img
                src={selectedItem.url}
                alt={`photo de ${selectedItem.title}`}
                className="image"
              />

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
