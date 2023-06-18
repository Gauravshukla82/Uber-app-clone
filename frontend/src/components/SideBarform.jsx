import React, { useState } from "react";
import "./SideBarform.css";
import Car from "./Map/Car";
const SideBarform = () => {
  const [ride, setRide] = useState(false);

  const handleRide = (e) => {
    e.preventDefault();
    setRide(!ride);
  };

  return (
    <>
      <div className="formdiv">
        <h2>Request Ride Now</h2>
        <form action="">
          <br />
          <label htmlFor="currnt location">Location</label>
          <br />
          <input type="text" placeholder="enter  location" />
          <br />
          <br />
          <label htmlFor="destination">Destination</label>
          <br />
          <input type="text" placeholder="enter destination" />
          <br />
          <br />
          <button onClick={handleRide} className="button">
            Search For Cars
          </button>
          {ride ? <Car /> : null}
        </form>
      </div>
    </>
  );
};

export default SideBarform;
