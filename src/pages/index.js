import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { useStyles } from "./style";
import BodyHeader from "../components/Molecules/BodyHeader.js";

const Dashboard = () => {
   const classes = useStyles();

   const data = useSelector((state) => state);
   console.log(data);
   return (
      <Layout>
         <BodyHeader />
      </Layout>
   );
};

export default Dashboard;
