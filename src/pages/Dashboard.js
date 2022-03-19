import React from "react";
import Layout from "../components/Layout";
import { useStyles } from "./style";
import BodyHeader from "../components/Molecules/BodyHeader.js";

const Dashboard = () => {
   const classes = useStyles();
   return (
      <Layout>
         <BodyHeader />
      </Layout>
   );
};

export default Dashboard;
