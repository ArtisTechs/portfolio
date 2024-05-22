import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import "../../shared/GlobalStyles.css";
import "./SampleProjectsPage.css";
import ModerCardSlidingList from "../../components/modern-card-sliding-list/ModerCardSlidingList";

const SampleProjectsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "This is a sample project description.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is another sample project description.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is another sample project description.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Project 4",
      description: "This is another sample project description.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Project 5",
      description: "This is another sample project description.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Project 6",
      description: "This is another sample project description.",
      image: "https://via.placeholder.com/150",
    },
    // Add more projects here
  ];

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div className="projects-page">
      <div className="my-work-container">
        <h1>What I do</h1>
        <ModerCardSlidingList />
      </div>
      <div className="sample-projects-container">
        <h1>Sample Work</h1>
        
      </div>
    </div>
  );
};

export default SampleProjectsPage;
