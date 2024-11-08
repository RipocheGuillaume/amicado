import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface HeaderProps {
  SetMenuChoice: React.Dispatch<React.SetStateAction<string>>;
}

// export default function Header({ SetMenuChoice }: HeaderProps) {
export default function Header() {
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  return (
    //   <Box
    //     sx={{
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //       textAlign: "center",
    //       background: "black",
    //       height: "50px",
    //       color: "white",
    //     }}
    //   >
    //     <Button
    //       sx={{ minWidth: 100, color: "white" }}
    //       onClick={() => SetMenuChoice("pageHome")}
    //     >
    //       Acceuil
    //     </Button>
    //     <Button
    //       sx={{ minWidth: 100, color: "white" }}
    //       onClick={() => SetMenuChoice("pageSongs")}
    //     >
    //       Son
    //     </Button>
    //     <Button
    //       sx={{ minWidth: 100, color: "white" }}
    //       onClick={() => SetMenuChoice("pagePictures")}
    //     >
    //       Photo
    //     </Button>
    //     <Tooltip title="Account settings">
    //       <IconButton
    //         href="http://localhost:5174/"
    //         onClick={handleClick}
    //         size="small"
    //         sx={{ ml: 2 }}
    //         aria-controls={open ? "account-menu" : undefined}
    //         aria-haspopup="true"
    //         aria-expanded={open ? "true" : undefined}
    //       >
    //         <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
    //       </IconButton>
    //     </Tooltip>
    //   </Box>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "black",
        height: "50px",
        color: "white",
      }}
    >
      <Button sx={{ minWidth: 100, color: "white" }} component={Link} to="/">
        Acceuil
      </Button>
      <Button
        sx={{ minWidth: 100, color: "white" }}
        component={Link}
        to="/songs"
      >
        Son
      </Button>
      <Button
        sx={{ minWidth: 100, color: "white" }}
        component={Link}
        to="/pictures"
      >
        Photo
      </Button>
      <Tooltip title="Account settings">
        <IconButton
          href="http://localhost:5174/"
          size="small"
          sx={{ ml: 2 }}
          aria-haspopup="true"
        >
          <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
        </IconButton>
      </Tooltip>
    </Box>
  );
}
