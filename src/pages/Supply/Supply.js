import React, { useEffect } from "react";
import FixedNavbar from "../../components/FixedNavbar"
import SupplyComponent from "../../components/Supply/SupplyComponent"
import SupplyContact from "../../components/Supply/SupplyContact"


function Supply(){
    useEffect(() => {
      window.scrollTo(0, 0);
      document.getElementById("mySidenav").style.width = "0";
    }, []);
    return (
      <>
        <div className="fixed-navbar">
          <FixedNavbar />
        </div>
        <div className="supply-page">
            <SupplyComponent />
            <SupplyContact />
        </div>
      </>
    );
}

export default Supply