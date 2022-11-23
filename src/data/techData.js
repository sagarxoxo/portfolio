import { DiReact } from "react-icons/di";
import { SiNextdotjs, SiNodedotjs,SiMongodb, SiFigma } from "react-icons/si";

export const techData = [
    {
        title: "Front-End",
        icon1: <DiReact color="#FFF" size={30}/>,
        icon2: <SiNextdotjs color="#FFF" size={26}/>,
        desc: "Experience with React.js & Next.js"
    },
    {
        title: "Back-End",
        icon1: <SiNodedotjs color="#FFF" size={30}/>,
        icon2: <SiMongodb color="#FFF" size={30}/>,
        desc: "Experience with Node and MongoDB"
    },
    {
        title: "UI/UX",
        icon1: <SiFigma color="#FFF" size={30}/>,
        desc: "Experience with tools like Figma"
    }
]