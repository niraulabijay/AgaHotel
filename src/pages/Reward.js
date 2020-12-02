import React, { useEffect } from "react";
import FixedNavbar from "../components/FixedNavbar";
import RewardBanner from "../components/Reward/RewardBanner";
import RewardCoupon from "../components/Reward/RewardCoupon";

function Reward() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="fixed-navbar">
        <FixedNavbar />
      </div>
      <RewardBanner />
      <RewardCoupon />
  
    </>
  );
}

export default Reward;
