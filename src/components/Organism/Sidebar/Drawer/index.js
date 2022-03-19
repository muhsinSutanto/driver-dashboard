import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import { useStyles } from "../style";
import { drawerList } from "../../../../assets/static";
import shipper_logo from "../../../../assets/images/shipper_logo.png";

const DrawerList = () => {
   const classes = useStyles();
   return (
      <div>
         <Toolbar>
            {" "}
            <img className={classes.logo} src={shipper_logo} />
         </Toolbar>

         <List>
            {drawerList.map((item, index) => (
               <ListItem
                  className={
                     !!item.text.includes("Driver")
                        ? classes.itemContainerActive
                        : classes.itemContainer
                  }
                  button
                  key={index}
               >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
               </ListItem>
            ))}
         </List>
      </div>
   );
};

export default DrawerList;
