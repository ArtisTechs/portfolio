import {
  faPaintBrush,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import developmentToolsImg1 from "../../assets/img/development-tools.png";
import designToolsImg1 from "../../assets/img/design-tools.png";

const ToolsUsedData = [
  {
    id: "tools1",
    title: "Development Tools",
    subtitle: "Tools That Power Effective Development.",
    modalSubtitle: `Passionate about using top web development tools to create efficient and engaging digital experiences.`,
    description:
      "I’ve used a variety of programming languages to build dynamic and responsive web applications, including <b> JavaScript, TypeScript, Python, C#, and Java.</b> Each language has played a key role in developing scalable and robust solutions tailored to specific project needs.",
    cardPhoto: developmentToolsImg1,
    icon: faScrewdriverWrench,
    listDescription: "My Development Toolkit:",
    list: [
      "React JS",
      "Angular",
      "Bootstrap",
      "Tailwind CSS",
      "Code Editor softwares",
      "Git",
      "Android Studio",
      "Open source Libraries",
      "Generative AI",
      "Wordpress",
    ],
  },
  {
    id: "tools2",
    title: "Design Tools",
    subtitle: "Tools That Elevate Creative Design.",
    modalSubtitle: `Passionate about using top design tools to create visually stunning and effective web experiences.`,
    description:
      "I’ve utilized a range of design tools to craft engaging and user-friendly interfaces.",
    cardPhoto: designToolsImg1,
    icon: faPaintBrush,
    listDescription: "My Design Toolkit",
    list: [
      "Figma",
      "Adobe Photoshop",
      "Canva",
      "Adobe Animate",
      "Sketch",
      "Traditional Sketch",
    ],
  },

  // Add more projects here
];

export default ToolsUsedData;
