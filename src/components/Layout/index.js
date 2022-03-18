import React, { useState } from "react";
import Header from "../Header";
import ResponsiveDrawer from "../Sidebar";

const Layout = (props) => {
   const [mobileOpen, setMobileOpen] = React.useState(false);
   const { childComponent, children } = props;

   const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
   };
   return (
      <div style={{ overflow: "hidden", height: "100vh" }}>
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
