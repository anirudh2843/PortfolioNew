import pglifeImg from "../../assets/pglife.png";
import irisImg from "../../assets/iris.png";
import qrImg from "../../assets/qrCode.png";
import mediImg from "../../assets/medi.png";
import artFlowImg from "../../assets/artFlow.png";
import Codemate from "../../assets/Codemate.png";

const projectsData = [
  {
    name: "CodeMate",
    category: "Full Stack",
    techstack: "ReactJS, NodeJS, Express, MongoDB",
    image: Codemate,
    links: {
      visit: "https://codemate-web.onrender.com",
      code: "https://github.com/anirudh2843/CodeMate-web.git",
    },
  },
  {
    name: "PG Life",
    category: "Full Stack",
    techstack: "PHP, MySQL, HTML, CSS, JavaScript",
    image: pglifeImg,
    links: {
      visit: "http://www.pglife.lovestoblog.com/?i=1",
      code: "https://github.com/anirudh2843/Pglife.git",
    },
    description:
      "A Full-Stack Web Application developed during the Internshala Full Stack Web Development Internship Training. Fully responsive platform delivers enhanced user functionalities and seamless performance across devices.",
  },
  {
    name: "Medtranslator",
    category: "AI/ML",
    techstack: "Python, Flask, OCR",
    image: mediImg,
    links: {
      visit: "",
      code: "https://github.com/anirudh2843/medtrans.git",
    },
    description:
      "Website that scans uploaded medical reports, translates them into Telugu, and provides diet recommendations.",
  },
  {
    name: "Iris-Recognization",
    category: "AI/ML",
    techstack: "Python, Deep Learning, OpenCV",
    image: irisImg,
    links: {
      visit: "",
      code: "https://github.com/anirudh2843/IrisRecognization.git",
    },
    description:
      "A cutting-edge biometric system leveraging deep learning and computer vision for precise iris pattern identification. Ensures secure authentication and real-time processing.",
  },
  {
    name: "QrCode Generator",
    category: "Frontend",
    techstack: "React.js, Tailwind CSS",
    image: qrImg,
    links: {
      visit: "https://qrcode3.netlify.app/",
      code: "https://github.com/anirudh2843/QrCode-Generator.git",
    },
    description:
      "A powerful QR Code Generator crafted with React.js and Tailwind CSS for instant code creation.",
  },
  {
    name: "ArtFlow",
    category: "Frontend",
    techstack: "Next.js, TypeScript, Tailwind CSS, Framer Motion",
    image: artFlowImg,
    links: {
      visit: "https://artflow11.netlify.app/",
      code: "https://github.com/anirudh2843/ArtFlow.git",
    },
    description:
      "A fully functional, modern digital sketching interface built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Users can draw freely, manage layers, choose brush styles, and export their artwork.",
  },
];

export default projectsData;
