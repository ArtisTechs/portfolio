import React from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faQuestion,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import CustomCard from "../../components/card/CustomCard";
import "./BasicModalContent.css";

const BasicModalContent = ({
  icon,
  images,
  listDescription,
  list,
  description,
  subtitle,
}) => {
  // Default icon in case none is passed
  const defaultIcon = faQuestion;

  return (
    <div className="basic-modal-content">
      {subtitle && <h1 dangerouslySetInnerHTML={{ __html: subtitle }} />}
      <div className="basic-modal-icon">
        <FontAwesomeIcon icon={icon || defaultIcon} size="2x" />
      </div>
      {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
      {images && images.length > 0 && (
        <div className="modal-images-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="modal-image"
            />
          ))}
        </div>
      )}
      {listDescription && (
        <div className="modal-list">
          <h1 dangerouslySetInnerHTML={{ __html: listDescription }} />
          {list && list.length > 0 && (
            <ul className="modal-list-items">
              {list.map((item, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default BasicModalContent;
