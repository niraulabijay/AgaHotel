import React from "react"
import FixedNavbar from "../../components/FixedNavbar"
import SupplyComponent from "../../components/Supply/SupplyComponent"
import SupplyContact from "../../components/Supply/SupplyContact"


function Supply(){
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