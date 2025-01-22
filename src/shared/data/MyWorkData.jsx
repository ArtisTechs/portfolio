import { faCode, faPalette } from "@fortawesome/free-solid-svg-icons";
import webDevImg2 from "../../assets/img/web-development-2.png";
import webDesignImg1 from "../../assets/img/web-design-1.png";

const MyWorkData = [
  {
    id: "work1",
    title: "Web/App Development",
    subtitle: "Transforming ideas into digital experiences.",
    modalSubtitle: `I love transforming ideas into stunning web and mobile experiences, creating solutions that enhance user interactions and drive innovation.`,
    description: `<b>What is Web Development?</b><br> Web development involve the creation and maintenance of websites. It encompasses designing, coding, and deploying digital interfaces that users interact with to access information, perform tasks, or consume content. Developers use programming languages, frameworks, and tools to build responsive, user-friendly, and functional experiences tailored to meet specific business or user needs.`,
    cardPhoto: webDevImg2,
    icon: faCode,
    listDescription: "Services I Offer:",
    list: [
      "Custom Website Design and Development",
      "E-Commerce Development",
      "Content Management Systems (CMS)",
      "Web Application Development",
      "Landing Page",
      "Website Maintenance and Support",
      "Search Engine Optimization (SEO)",
      "Performance Optimization",
      "Custom Web Components and Plugins",
      "Thesis or Capstone Project Development",
    ],
  },
  {
    id: "work2",
    title: "UI / UX Design",
    subtitle: "Turning concepts into engaging digital experiences.",
    modalSubtitle: `My passion is bringing innovative ideas to life through exceptional web and mobile design, creating impactful online experiences.`,
    description: `<b>What is Web Design?</b><br>Web design involves the creation and maintenance of websites. It encompasses designing the layout, visual elements, and overall aesthetics of digital interfaces that users interact with to access information, perform tasks, or consume content. Designers use various tools and techniques to build visually appealing, user-friendly, and functional experiences tailored to meet specific business or user needs.`,
    cardPhoto: webDesignImg1,
    icon: faPalette,
    listDescription: "Services I Offer:",
    list: [
      "Custom Website Design",
      "UI/UX Design",
      "Landing Page Design",
      "Brand Identity Design",
      "Website Redesign",
    ],
  },
];

export default MyWorkData;
