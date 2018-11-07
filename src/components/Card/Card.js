import React from "react";
import "./Card.css";
const Card = props => {
  return (
    <div>
      {props.image.map(image => {
        return (
          <div
            key={`${image}`}
            value={`${image}`}
            className="card"
            onClick={props.handleBtnClick}
          >
            <img
              src={require(`../Headshot/${image}.jpg`)}
              height="248"
              width="248"
              alt=""
              value={`${image}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
