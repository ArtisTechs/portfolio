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
import BasicModalContent from "../../components/basic-modal-content/BasicModalContent";

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
      {myWorks.length > 0 && (
        <div className="sample-projects-container">
          <div className="sample-project-title" onClick={toggleMyWork}>
            <h1>What I Do</h1>
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
                imgSrc={project.cardPhoto}
                title={project.title}
                description={project.subtitle}
                customStyle={project.customStyle}
                onClick={() => handleShowModal(project)}
              />
            ))}
          </div>
        </div>
      )}
      {sampleProjects.length > 0 && (
        <div className="sample-projects-container">
          <div className="sample-project-title" onClick={toggleSampleWork}>
            <h1>Sample Work</h1>
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
                imgSrc={project.cardPhoto}
                title={project.title}
                description={project.subtitle}
                customStyle={project.customStyle}
                onClick={() => handleShowModal(project)}
              />
            ))}
          </div>
        </div>
      )}
      {toolsUsed.length > 0 && (
        <div className="sample-projects-container">
          <div className="sample-project-title" onClick={toggleTools}>
            <h1>Tools I Used</h1>
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
                imgSrc={project.cardPhoto}
                title={project.title}
                description={project.subtitle}
                customStyle={project.customStyle}
                onClick={() => handleShowModal(project)}
              />
            ))}
          </div>
        </div>
      )}
      <Modal
        className="custom-modal"
        show={showModal}
        onHide={handleCloseModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BasicModalContent
            icon={selectedProject?.icon}
            images={selectedProject?.images}
            listDescription={selectedProject?.listDescription}
            list={selectedProject?.list}
            description={selectedProject?.description}
            subtitle={selectedProject?.modalSubtitle}
          />
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button
            className="common-button"
            variant="secondary"
            onClick={handleCloseModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SampleProjectsPage;
