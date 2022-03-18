import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const Header = (props) => {
   const { handleDrawerToggle } = props;

   return (
      <AppBar position="static">
         <Toolbar>
            <div>
               <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
               >
                  <MenuIcon />
               </IconButton>
               <Typography>Hello, Shipper User</Typography>
               <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
               >
                  <AccountCircle />
               </IconButton>
            </div>
         </Toolbar>
      </AppBar>
   );
};

export default Header;
