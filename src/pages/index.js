import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { useStyles } from "./style";
import BodyHeader from "../components/Molecules/BodyHeader.js";
import { getData } from "../redux/actions/driverAction";
import DriverCard from "../components/Molecules/DriverCard";

const Dashboard = () => {
   const classes = useStyles();
   const dispatch = useDispatch();

   const { drivers } = useSelector((state) => state);

   useEffect(() => {
      dispatch(getData(1));
   }, []);

   console.log(drivers);
   return (
      <Layout>
         <BodyHeader />
         <div className={classes.cardsContainer}>
            {drivers.data.map((driver, index) => (
               <DriverCard driver={driver} />
            ))}
         </div>
      </Layout>
   );
};

export default Dashboard;
