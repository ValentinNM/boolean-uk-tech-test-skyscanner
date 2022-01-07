import React from "react";
import { useEffect, useState } from "react";

import STYLES from "./Flights.scss";

const Flights = () => {
  const [itineraries, setItineraries] = useState([]);
  const [legs, setLegs] = useState([]);
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
        const iti = data.itineraries;
        const leg = data.legs;
        setItineraries(iti);
        setLegs(leg);
        setFlights(data.flights);
      });
  };
  useEffect(() => {
    getFlights();
  }, []);

  return (
    <div>
      <ul>
        {itineraries.map((itinerary, index) => {
          const { price, agent, legs: ref } = itinerary;

          const flights = legs.filter(
            (leg) => leg.id === ref[0] || leg.id === ref[1]
          );

          let flight1 = flights.filter((flight) => flight.id === ref[0]);
          let flight2 = flights.filter((flight) => flight.id === ref[1]);

          return (
            <li key={index}>
              <div>
                <div>
                  {/* <img src={"https://logos.skyscnr.com/images/airlines/favicon/{flight1[0]airline_id}.png"} alt="airline_logo" /> */}
                  {/* {flight1[0].departure_time} - {flight1[0].arrival_time}
                  {flight1[0].departure_airport} - {flight1[0].arrival_airport}
                  {flight1[0].duration_mins} mins
                  {flight1[0].stops === 0
                    ? "Direct"
                    : flight1[0].stops + " Stop"} */}
                </div>
                <div>
                  {/* {flight2[0].departure_time} - {flight2[0].arrival_time}
                  {flight2[0].departure_airport} - {flight2[0].arrival_airport}
                  {flight2[0].duration_mins} mins
                  {flight2[0].stops === 0
                    ? "Direct"
                    : flight2[0].stops + " Stop"} */}
                </div>
              </div>
              <div className="">
                <div>
                  <h3>{price}</h3>
                  <p>{agent}</p>
                </div>
                <button>Select</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Flights;
