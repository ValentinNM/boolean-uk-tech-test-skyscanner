import React from "react";
import { useEffect, useState } from "react";

import STYLES from "./Flights.scss";

const Flights = () => {
  const [flights, setFlights] = useState([]);

  const getFlights = () => {
    fetch("./flights.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {

        const {itineraries, legs} = data; 

        // Step 1: map through the array we want to change
        const foundFlights = data.itineraries.map((itinerary) => { 

          // Step 2: map through each array value in order to
          //        find our martching value in the target
          const legsWithData = itinerary.legs.map((targetLegId) => 
            legs.find((leg) => targetLegId === leg.id) // find and return the found data
          )
        })
      });
  };
  useEffect(() => {
    getFlights();
  }, []);

  return (
    <div>
      <ul>
        <li>
          <div>
            <div>
              {/* <img src={"https://logos.skyscnr.com/images/airlines/favicon/{flight1[0]airline_id}.png"} alt="airline_logo" /> */}
            </div>
            <div></div>
          </div>
          <div className="">
            <div></div>
            <button>Select</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Flights;
