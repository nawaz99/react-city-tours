import React, { useState } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import tourData from "./tourData";

const TourList = () => {
  const [state, setState] = useState({ tour: tourData });

  const removeTour = id => {
    const sorted = state.tour.filter(tours => tours.id !== id);
    setState({ tour: sorted });
  };

  return (
    <section className="tourlist">
      {state.tour.map(tour => {
        return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
      })}
    </section>
  );
};

export default TourList;
