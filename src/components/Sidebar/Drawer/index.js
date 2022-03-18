import React from "react";
import {
   Box,
   CssBaseline,
   Drawer,
   List,
   ListItem,
   ListItemIcon,
   ListItemText,
   Toolbar,
} from "@mui/material";

import { drawerList } from "../../../assets/static";
import shipper_logo from "../../../assets/images/shipper_logo.png";

const DrawerList = () => {
   return (
      <div>
         <Toolbar>
            {" "}
            <img style={{ width: "150px" }} src={shipper_logo} />
         </Toolbar>

         <List>
            {drawerList.map((item, index) => (
               <ListItem button key={index}>
                  <ListItemIcon style={{ minWidth: "40px" }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
               </ListItem>
            ))}
         </List>
      </div>
   );
};

export default DrawerList;
