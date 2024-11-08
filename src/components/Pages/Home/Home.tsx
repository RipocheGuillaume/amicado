import { Box, Button, CardMedia } from "@mui/material";
import styles from "./home.css";
import choraleBanniere from "/choraleBanniere.png";
import vignette_concert from "/vignette_concert.png";
import vignette_group from "/vignette_group.png";
import vignette_partition from "/vignette_partition.png";
import vignette_piano from "/vignette_piano.png";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box sx={{ height: "90vh", display: "flex", flexDirection: "column" }}>
      <Box sx={{ bgcolor: "red", height: "45%" }}>
        <Box
          sx={{
            backgroundImage: `url(${choraleBanniere})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100%",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "55%",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Button
          sx={{ width: "25%", p: 2, display: "flex", flexDirection: "column" }}
          component={Link}
          to="/songs"
        >
          <CardMedia
            sx={{
              width: "100%",
              height: 300,
              backgroundImage: `url(${vignette_concert})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <Box sx={{ bgcolor: "blue", color: "white", width: "100%" }}>
            <h1>Les chansons</h1>
          </Box>
        </Button>
        <Button
          sx={{ width: "25%", p: 2, display: "flex", flexDirection: "column" }}
          component={Link}
          to="/pictures"
        >
          <CardMedia
            sx={{
              width: "100%",
              height: 300,
              backgroundImage: `url(${vignette_concert})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <Box sx={{ bgcolor: "blue", color: "white", width: "100%" }}>
            <h1>Les photos</h1>
          </Box>
        </Button>
        <Box sx={{ width: "25%", p: 2 }}>
          <CardMedia
            sx={{
              width: "100%",
              height: 300,
              backgroundImage: `url(${vignette_partition})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <Box sx={{ bgcolor: "blue", color: "white" }}>
            <h1>Evenements</h1>
          </Box>
        </Box>
        <Box sx={{ width: "25%", p: 2 }}>
          <CardMedia
            sx={{
              width: "100%",
              height: 300,
              backgroundImage: `url(${vignette_piano})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <Box sx={{ bgcolor: "blue", color: "white" }}>
            <h1>Contact</h1>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
