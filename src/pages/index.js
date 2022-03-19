import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { useStyles } from "./style";
import BodyHeader from "../components/Molecules/BodyHeader.js";
import { getData } from "../redux/actions/driverAction";

const Dashboard = () => {
   const classes = useStyles();
   const dispatch = useDispatch();

   const data = useSelector((state) => state);

   useEffect(() => {
      dispatch(getData(2));
   }, []);

   return (
      <Layout>
         <BodyHeader />
      </Layout>
   );
};

export default Dashboard;
