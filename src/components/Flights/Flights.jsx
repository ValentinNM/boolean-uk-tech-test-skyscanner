import React from "react";
import { useEffect, useState } from "react";

import STYLES from "./Flights.scss";

const Flights = () => {
  const [itineraries, setItineraries] = useState([]);
  const [legs, setLegs] = useState([]);

  const getFlights = () => {
    fetch("./flights.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const iti = data.itineraries;
        const leg = data.legs;
        setItineraries(iti);
        setLegs(leg);
      });
  };
  useEffect(() => {
    getFlights();
  }, []);

  console.log({ itineraries, legs });

  return (
    <div>
      <ul>
        {itineraries.map((itinerary, index) => {

          const {price, agent} = itinerary;

          

          return (
            <li key={index}>
              <div>
                <div>

                </div>
                <div>

                </div>
              </div>
              <div className="">
                <div>
                {price}
                <p>{agent}</p>
                </div>
                <button>
                  Select
                </button>
              </div>
            </li>
            ) 
        })}
      </ul>
    </div>
  );
};

export default Flights;
