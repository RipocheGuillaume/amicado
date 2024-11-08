import { Box, Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import React, { useEffect } from "react";

interface MenuSongProps {
  arrayData: { id: number; display: string }[]; // Mise à jour de `id` en `string` pour correspondre aux données
  setResponseChoice: (choice: number) => void; // `choice` est maintenant une chaîne (id de la chanson sélectionnée)
  initChoice?: boolean;
}

function MenuSongs({
  arrayData,
  setResponseChoice,
  initChoice,
}: MenuSongProps) {
  const [choice, setChoice] = React.useState<number>(-1);

  useEffect(() => {
    if (initChoice) {
      setChoice(-1);
    }
  }, [initChoice]);

  const handleClick = (data: { id: number; display: string }) => {
    setChoice(data.id);
    setResponseChoice(data.id);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: 1,
      }}
    >
      {arrayData.map((data) => (
        <Button
          key={data.id} // Utilisation de `data.id` pour la clé unique
          variant={choice === data.id ? "contained" : "text"}
          sx={{
            minWidth: 100,
            bgcolor: "blue",
            color: "white",
            borderRadius: 10,

            m: 1,
            fontWeight: "bold",
          }}
          onClick={() => handleClick(data)}
        >
          {data.display} {/* Affiche `year` dans chaque bouton */}
        </Button>
      ))}
    </Box>
  );
}

MenuSongs.defaultProps = {
  initChoice: false,
};

export default MenuSongs;
