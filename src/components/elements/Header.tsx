import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import useAuth from "../../hook/useAuth";

export default function Header() {
  const { status } = useAuth();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        background: "blue",
        height: "50px",
        color: "white",
        padding: "0 16px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "auto",
          height: "100%",
        }}
      >
        <img
          src="./logoAmicado.png"
          alt="logo Amicado"
          style={{ width: "auto", height: "100%", marginBottom: "10px" }}
        />
      </Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          sx={{ minWidth: 100, color: "white", fontWeight: "bold" }}
          component={Link}
          to="/"
        >
          Acceuil
        </Button>
        <Button
          sx={{ minWidth: 100, color: "white", fontWeight: "bold" }}
          component={Link}
          to="/songs"
        >
          Son
        </Button>
        <Button
          sx={{ minWidth: 100, color: "white", fontWeight: "bold" }}
          component={Link}
          to="/pictures"
        >
          Photo
        </Button>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {status === 1 && (
          <Tooltip title="Account settings">
            <IconButton
              href="http://admin.amicado.fr"
              size="small"
              sx={{ color: "white" }}
              aria-haspopup="true"
            >
              <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title={status === 1 ? "Logout" : "Login"}>
          <IconButton
            onClick={status === 1 ? handleLogout : () => navigate("/login")}
            size="large"
            sx={{ color: "white" }}
            aria-label={status === 1 ? "logout" : "login"}
          >
            {status === 1 ? (
              <LogoutIcon fontSize="large" />
            ) : (
              <AccountCircleIcon fontSize="large" />
            )}
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}
