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
    name: "Dringgle",
    id: 1,
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
    id: 2,
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
    id: 3,
    link: "https://comfy-store-app.vercel.app/",
    description: "// Furniture store",
    img: "../../img/comfyScreen.jpg",
    stack: ["Javascript", "SCSS", "HTML", "Adaptive design"],
  },
  {
    name: "e-commerce layout",
    id: 4,
    link: "https://ecommerse-layout.vercel.app/",
    description: "// Pixel perfect layout build from figma design",
    img: "../../img/layoutScreen.jpg",
    stack: ["HTML", "CSS", "Adaptive design"],
  },
];
