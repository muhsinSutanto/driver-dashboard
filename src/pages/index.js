import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { useStyles } from "./style";
import BodyHeader from "../components/Molecules/BodyHeader/index.js";
import { getData, paginate } from "../redux/actions/driverAction";
import DriverCard from "../components/Molecules/DriverCard";
import Pagination from "../components/Molecules/Pagination";

const Dashboard = () => {
   const classes = useStyles();
   const dispatch = useDispatch();

   const { drivers } = useSelector((state) => state);

   useEffect(() => {
      dispatch(getData(1));
   }, []);

   return (
      <Layout>
         <BodyHeader />
         {!drivers.data.length ? (
            <div className={classes.emphtyData}>
               <h1>Data tidak ditemukan</h1>
            </div>
         ) : (
            <React.Fragment>
               <div className={classes.cardsContainer}>
                  {drivers.data.map((driver, index) => (
                     <DriverCard driver={driver} />
                  ))}
               </div>
               {/* <Pagination /> */}
            </React.Fragment>
         )}
      </Layout>
   );
};

export default Dashboard;
