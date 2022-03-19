import React, { useState } from "react";
import Header from "../Organism/Header";
import ResponsiveDrawer from "../Organism/Sidebar";

const Layout = (props) => {
   const [mobileOpen, setMobileOpen] = React.useState(false);
   const { children } = props;

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };
   return (
      <div style={{ height: "100vh" }}>
         <Header handleDrawerToggle={handleDrawerToggle} />
         <ResponsiveDrawer
            childComponent={children}
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
         />
      </div>
   );
};

export default Layout;
