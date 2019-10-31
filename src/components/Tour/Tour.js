import React, { useState } from "react";
import "./Tour.scss";

const Tour = ({ tour: { img, name, city, info, id }, removeTour }) => {
  const [state, setState] = useState({
    showInfo: false
  });
  return (
    <article className="tour">
      <div className="img-container">
        <img src={img} alt="london" />
        <span className="close-btn" onClick={()=>removeTour(id)}>
          <i className="fas fa-window-close"></i>
        </span>
      </div>
      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info
          <span onClick={() => setState({ showInfo: !state.showInfo })}>
            <i className="fas fa-caret-square-down"></i>
          </span>
        </h5>
        {state.showInfo && <p>{info}</p>}
      </div>
    </article>
  );
};

export default Tour;
