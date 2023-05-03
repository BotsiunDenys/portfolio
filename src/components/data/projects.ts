interface Projects {
  name: string;
  id: number;
  link: string;
  description: string;
  stack: string[];
  img: string;
}
export const projects: Array<Projects> = [
  {
    name: "Cho-cho-pizza",
    id: 1,
    link: "https://cho-cho-pizza-delivery.web.app/",
    description:
      "// Web app for pizza restaurant with opportunity to make orders. Created with authorization and authentication using JWT tokens. To log in as admin use name and password 'admin'.",
    img: "../../img/pizza.jpg",
    stack: [
      "Webpack",
      "React",
      "Typescript",
      "React Router",
      "Redux toolkit",
      "Redux persist",
      "Tailwind",
      "CSS",
      "Formik + yup",
      "Firebase",
      "Adaptive design",
      "Node JS",
      "Express",
      "MongoDB",
    ],
  },
  {
    name: "Dringgle",
    id: 2,
    link: "https://dringgle.vercel.app/",
    description:
      "// Dringgle is a website for searching an alcoholic cocktails and receipts by different parameters.",
    img: "../../img/dringgleScreen.jpg",
    stack: [
      "Typescript",
      "React",
      "React Router",
      "Redux toolkit",
      "Redux Persist",
      "SCSS",
      "HTML",
      "Adaptive design",
    ],
  },
  {
    name: "Portfolio",
    id: 3,
    link: "",
    description: "// Portfolio website",
    img: "../../img/portfolioScreen.jpg",
    stack: [
      "Typescript",
      "React",
      "React router",
      "React toastify",
      "Formik",
      "Yup",
      "SCSS",
      "HTML",
      "Adaptive design",
    ],
  },
  {
    name: "comfy",
    id: 4,
    link: "https://comfy-store-app.vercel.app/",
    description: "// Furniture store",
    img: "../../img/comfyScreen.jpg",
    stack: ["Javascript", "SCSS", "HTML", "Adaptive design"],
  },
];
