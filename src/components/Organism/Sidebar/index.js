import { Box, CssBaseline, Drawer } from "@mui/material";
import DrawerList from "./Drawer";
import { useStyles } from "./style";

const drawerWidth = 260;

const ResponsiveDrawer = (props) => {
   const classes = useStyles();
   const { window, mobileOpen, handleDrawerToggle, childComponent } = props;
   const container = window !== undefined ? () => window().document.body : undefined;

   return (
      <Box sx={{ display: "flex" }}>
         <CssBaseline />

         <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
         >
            <Drawer
               container={container}
               variant="temporary"
               open={mobileOpen}
               onClose={handleDrawerToggle}
               ModalProps={{
                  keepMounted: true,
               }}
               style={{ borderRight: "none" }}
               sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                     // boxSizing: "border-box",
                     width: drawerWidth,
                     borderRight: "none !important",
                  },
               }}
            >
               <DrawerList />
            </Drawer>
            <Drawer
               variant="permanent"
               sx={{
                  display: { xs: "none", sm: "block" },
                  "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
               }}
               open
            >
               <DrawerList />
            </Drawer>
         </Box>
         <Box
            component="main"
            sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            style={{ background: "#fff9f6", height: "100vh" }}
         >
            {childComponent}
         </Box>
      </Box>
   );
};

export default ResponsiveDrawer;
