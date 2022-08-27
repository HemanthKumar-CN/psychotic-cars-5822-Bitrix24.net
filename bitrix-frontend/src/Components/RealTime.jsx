import React from "react";
import Clock from "react-live-clock";
export const RealTime = () => {
  return (
    <div>
      <Clock ticking={true} timezone={"Asia/Calcutta"} interval={1000} />
    </div>
  );
};
