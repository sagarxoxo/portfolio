import {
  AppBar,
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import ParticlesBg from "particles-bg";
import React from "react";
import { MaterialUISwitch } from "../../GlobalstylesComponents/Switch";
import logo from "../../images/code.png";
import "./Header.css";
export default function Header() {
  const navItems = ["Portfolio", "Technologies", "About"];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className="appNavbar"
        sx={{ backgroundColor: "#0F1624" }}
      >
        <Toolbar className="tollBar">
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={logo} className="logo" /> Web Developer
          </Typography>
          <Box className="">
            {navItems.map((item) => (
              <Button key={item} className="menu" href={`#${item}`}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <ParticlesBg type="cobweb" color="blue" bg={true} />
    </Box>
  );
}
