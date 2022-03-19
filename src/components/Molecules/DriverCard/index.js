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
            <p>...</p>
         </div>
         <div>
            <img src={driver.picture.thumbnail} />
            <div>
               <h1>Nama Driver</h1>
               <p>
                  {driver.name.first} {driver.name.second}
               </p>
            </div>
         </div>
      </div>
   );
};

export default DriverCard;
