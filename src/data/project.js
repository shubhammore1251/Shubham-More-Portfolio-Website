import MernEcomImg from "../assets/mern-ecom.png";
import ChatAppImg from "../assets/react-chat-app.png";
import SingLangImg from "../assets/slr.png";
import YoutbeImg from "../assets/youtubeclone.png";

export const projectDetails = [
  {
    id: "#1111",
    title: "MERN Based Ecommerce Application",
    description:
      "A MERN-based E-commerce app with seamless shopping features and  secure authentication, real-time updates and admin backend handling is implemented ",
    img: MernEcomImg,
    techs: [
      "React",
      "Redux",
      "Material UI",
      "Express",
      "MongoDB",
      "Postman",
      'Cloudinary',
      "Stripe",
    ],
    demo_url: "https://mern-ecom-site.netlify.app/",
  },
  {
    id: "#2222",
    title: "Sign Language Recognition Platform",
    description:
      "A sign language recognition project involved creating a custom dataset, preprocessing images, training a model, integrating with React.",
    img: SingLangImg,
    techs: ["React", "Redux", "Firebase", "Mediapipe"],
    demo_url: "https://sign-language-ai.web.app/",
  },
  {
    id: "#3333",
    title: "Realtime Chatrooms",
    description:
      "A Real-time  Chatrooms app built with React.js, Node.js, and Socket.io. Real-time conversations with ease and enjoy a responsive interface",
    img: ChatAppImg,
    techs: ["React", "NodeJs", "Socket IO"],
    demo_url: "https://realtime-chatroomss.netlify.app",
  },
  {
    id: "#4444",
    title: "YouTube Clone",
    description:
      "A Youtube Clone made using YouTube API. You see some of the Youtube features here.It is also Mobile Responsive",
    img: YoutbeImg,
    techs: ["React", "Redux", "Firebase", "Sass"],
    demo_url: "https://yt-cl-2022.web.app",
  },
];
