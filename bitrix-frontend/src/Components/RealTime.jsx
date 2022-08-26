import React from "react";
import Clock from "react-live-clock";
export const RealTime = () => {
  return (
    <div>
      <Clock timezone={"Asia/Calcutta"} interval={1000}/>
    </div>
  );
};
