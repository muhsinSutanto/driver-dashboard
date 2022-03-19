import { AppBar, Toolbar, IconButton, Box, MenuItem, Typography } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import shipper_logo from "../../../assets/images/shipper_logo.png";
import { useStyles } from "./style";

const Header = (props) => {
   const classes = useStyles();
   const { handleDrawerToggle } = props;

   return (
      <AppBar position="static" className={classes.containerWrapper}>
         <Toolbar className={classes.container}>
            <div className={classes.contentContainer}>
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
                  <Box>
                     <img src={shipper_logo} />
                  </Box>
               </div>
               <Typography sx={{ display: { xs: "none", sm: "block" } }}>
                  Hello, <span>Shipper User</span>
               </Typography>
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
