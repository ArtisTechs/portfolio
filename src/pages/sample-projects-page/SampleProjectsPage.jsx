import React, { useState, useRef, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../../shared/GlobalStyles.css";
import "./SampleProjectsPage.css";
import CustomCard from "../../components/card/CustomCard";
import SampleProjectsData from "../../shared/data/SampleProjectsData";
import MyWorkData from "../../shared/data/MyWorkData";
import ToolsUsedData from "../../shared/data/ToolsUsedData";

const SampleProjectsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMyWork, setShowMyWork] = useState(true);
  const [showSampleWork, setShowSampleWork] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const cardRowMyWork = useRef(null);
  const cardRowSampleWork = useRef(null);
  const cardRowTools = useRef(null);

  const sampleProjects = SampleProjectsData;
  const myWorks = MyWorkData;
  const toolsUsed = ToolsUsedData;

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const toggleSampleWork = () => {
    setShowSampleWork(!showSampleWork);
  };

  const toggleMyWork = () => {
    setShowMyWork(!showMyWork);
  };

  const toggleTools = () => {
    setShowTools(!showTools);
  };

  useEffect(() => {
    if (cardRowMyWork.current) {
      cardRowMyWork.current.style.height = showMyWork
        ? `${cardRowMyWork.current.scrollHeight}px`
        : "0";
    }
  }, [showMyWork]);

  useEffect(() => {
    if (cardRowSampleWork.current) {
      cardRowSampleWork.current.style.height = showSampleWork
        ? `${cardRowSampleWork.current.scrollHeight}px`
        : "0";
    }
  }, [showSampleWork]);

  useEffect(() => {
    if (cardRowTools.current) {
      cardRowTools.current.style.height = showTools
        ? `${cardRowTools.current.scrollHeight}px`
        : "0";
    }
  }, [showTools]);

  return (
    <div className="projects-page">
      <div className="sample-projects-container">
        <div className="sample-project-title" onClick={toggleMyWork}>
          <h1>What I Do </h1>
          <FontAwesomeIcon
            className="icon"
            icon={showMyWork ? faChevronUp : faChevronDown}
          />
        </div>
        <div
          ref={cardRowMyWork}
          className={`card-row ${showMyWork ? "expanded" : ""}`}
        >
          {myWorks.map((project) => (
            <CustomCard
              key={project.id}
              imgSrc={project.image}
              title={project.title}
              description={project.description}
              customStyle={project.customStyle}
              onClick={() => handleShowModal(project)}
            />
          ))}
        </div>
      </div>
      <div className="sample-projects-container">
        <div className="sample-project-title" onClick={toggleSampleWork}>
          <h1>Sample Work </h1>
          <FontAwesomeIcon
            className="icon"
            icon={showSampleWork ? faChevronUp : faChevronDown}
          />
        </div>
        <div
          ref={cardRowSampleWork}
          className={`card-row ${showSampleWork ? "expanded" : ""}`}
        >
          {sampleProjects.map((project) => (
            <CustomCard
              key={project.id}
              imgSrc={project.image}
              title={project.title}
              description={project.description}
              customStyle={project.customStyle}
              onClick={() => handleShowModal(project)}
            />
          ))}
        </div>
      </div>
      <div className="sample-projects-container">
        <div className="sample-project-title" onClick={toggleTools}>
          <h1>Tools I Used </h1>
          <FontAwesomeIcon
            className="icon"
            icon={showTools ? faChevronUp : faChevronDown}
          />
        </div>
        <div
          ref={cardRowTools}
          className={`card-row ${showTools ? "expanded" : ""}`}
        >
          {toolsUsed.map((project) => (
            <CustomCard
              key={project.id}
              imgSrc={project.image}
              title={project.title}
              description={project.description}
              customStyle={project.customStyle}
              onClick={() => handleShowModal(project)}
            />
          ))}
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedProject?.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SampleProjectsPage;
