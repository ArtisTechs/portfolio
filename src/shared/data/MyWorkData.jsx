import { faCode, faPalette } from "@fortawesome/free-solid-svg-icons";
import webDevImg1 from "../../assets/img/web-development-1.jpg";
import webDevImg2 from "../../assets/img/web-development-2.png";
import webDesignImg1 from "../../assets/img/web-design-1.png";

const MyWorkData = [
  {
    id: "work1",
    title: "Web Development",
    subtitle: "Transforming ideas into digital experiences.",
    modalSubtitle: `I love transforming artistic visions into stunning web and mobile experiences, creating solutions that elevate the work of artists and creatives.`,
    description: `<b>What is Web Development?</b><br> Web development involve the creation and maintenance of websites. It encompasses designing, coding, and deploying digital interfaces that users interact with to access information, perform tasks, or consume content. Developers use programming languages, frameworks, and tools to build responsive, user-friendly, and functional experiences tailored to meet specific business or user needs.`,
    cardPhoto: webDevImg2,
    icon: faCode,
    listDescription:
      "10 Ways Personalized Portfolio Websites Empower Artists and Creatives",
    list: [
      "Showcase Unique Style: Reflect your personal brand and aesthetic.",
      "Professional Presence: Impress clients with a polished online profile.",
      "Centralized Portfolio: Keep all your work in one accessible place.",
      "Enhanced Visibility: Boost online visibility with SEO-friendly content.",
      "Client Engagement: Enable direct communication via contact forms and emails.",
      "Show Versatility: Highlight various projects with dynamic displays.",
      "Build Credibility: Include testimonials and case studies.",
      "Sell Your Work: Add e-commerce features for easy sales.",
      "Easy Updates: Keep your portfolio current with simple updates.",
      "Personal Connection: Share your story and creative process.",
    ],
  },
  {
    id: "work2",
    title: "Web Design",
    subtitle: "Turning concepts into engaging digital experiences.",
    modalSubtitle: `My passion is bringing artistic ideas to life through exceptional web design, helping artists and creatives shine online.`,
    description: `<b>What is Web Design?</b><br>Web design involves the creation and maintenance of websites. It encompasses designing the layout, visual elements, and overall aesthetics of digital interfaces that users interact with to access information, perform tasks, or consume content. Designers use various tools and techniques to build visually appealing, user-friendly, and functional experiences tailored to meet specific business or user needs.`,
    cardPhoto: webDesignImg1,
    icon: faPalette,
    listDescription:
      "10 Reasons Why Artists and Creatives Need Help with Web Design",
    list: [
      "Professional Quality: Ensure a polished and professional website that truly represents your brand.",
      "Time Savings: Focus on your art while experts handle the complexities of web design.",
      "Enhanced User Experience: Create a user-friendly interface that keeps visitors engaged and returning.",
      "SEO Optimization: Improve your online visibility with SEO best practices integrated into your web design.",
      "Mobile Responsiveness: Guarantee your website looks great and functions well on all devices.",
      "Custom Functionality: Add unique features tailored to your specific needs and artistic vision.",
      "Security: Protect your work and personal information with secure web design practices.",
      "Brand Consistency: Maintain a cohesive and consistent brand identity across your website.",
      "Technical Support: Receive ongoing support and maintenance to keep your site running smoothly.",
      "Creative Input: Collaborate with designers to bring fresh, innovative ideas to your online presence.",
    ],
  },
];

export default MyWorkData;
