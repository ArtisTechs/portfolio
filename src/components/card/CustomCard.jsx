import React, { useState } from "react";
import "./CustomCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CustomCard = ({ imgSrc, title, description, customStyle, onClick }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
    if (onClick) onClick();
  };

  return (
    <div className={`card-container ${clicked ? "clicked" : ""}`}>
      <figure
        style={customStyle}
        onClick={handleClick}
        className={clicked ? "clicked" : ""}
      >
        <img src={imgSrc} alt={title} className={clicked ? "clicked" : ""} />
        <div className="initial-caption">
          <h1>{title}</h1>
          <p>
            Find out more
            <span className="ms-2">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </p>
        </div>
        <figcaption className={clicked ? "clicked" : ""}>
          <div className="caption">
            <h1>{title}</h1>
            <p className="subtitle">{description}</p>
            <p className="click-more">Click to find out more</p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default CustomCard;
