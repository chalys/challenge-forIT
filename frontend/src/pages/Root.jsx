import React from "react";
import SideBar from "../components/Dashboard/SideBar";
import TopBar from "../components/Dashboard/TopBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <TopBar />
                <Outlet /> {/* INFORMACIÓN DINÁMICA DE ACUERDO A LA VISTA CORRESPONDIENTE */}
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Root.propTypes = {};

export default Root;
