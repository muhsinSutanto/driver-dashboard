import { IconButton } from "@material-ui/core";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import { useStyles } from "./style";

const DriverCard = (props) => {
   const { driver } = props;
   const classes = useStyles();
   return (
      <div className={classes.cardContainer}>
         <div>
            <p>
               Driver ID <span>{driver.id.value}</span>
            </p>

            <IconButton color="inherit" aria-label="open drawer" edge="start">
               <MoreHorizIcon />
            </IconButton>
         </div>
         <div className={classes.bottomCard}>
            <img src={driver.picture.thumbnail} />
            <div>
               <h1>Nama Driver</h1>
               <p>
                  {driver.name.first} {driver.name.last}
               </p>
               <h1>Telepon</h1>
               <p>{driver.cell}</p>
               <h1 className={classes.remove}>Email</h1>
               <p className={classes.remove}>{driver.email}</p>
               <h1 className={classes.remove}>Tanggal Lahir</h1>
               <p className={classes.remove}>{driver.dob.date.substr(0, 10)}</p>
            </div>
         </div>
      </div>
   );
};

export default DriverCard;
