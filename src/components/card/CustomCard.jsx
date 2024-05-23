import React, { useState } from "react";
import "./CustomCard.css";

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
        <figcaption className={clicked ? "clicked" : ""}>
          <div className="caption">
            <p>{title}</p>
            <span className="subtitle">{description}</span>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default CustomCard;
