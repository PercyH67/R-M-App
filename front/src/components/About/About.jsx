import React from "react";
import iconoIn from "../../assets/Linkedin.png";
import iconoGit from "../../assets/github.png";
import iconoCv from "../../assets/iconCv.png";
import {
  SiTailwindcss,
  SiRedux,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiPostgresql,
  SiSequelize,
} from "react-icons/si";
import { Link } from "react-router-dom";

const About = () => {
//   const teamMembers = [
//     {
//       name: "Percy Huanca",
//       photoUrl:
//         "https://res.cloudinary.com/dhyqgl7ie/image/upload/v1688397486/About/Percy_q1mxxn.jpg",
//       description: "Full Stack web developer.",
//       contacto: "Contáctame:",
//       linkedinUrl: "https://www.linkedin.com/in/percydh673002/",
//       githubUrl: "https://github.com/PercyH67",
//       linkedinIcon: iconoIn,
//       githubIcon: iconoGit,
//       iconoCv: iconoCv,
//       cvUrl: "https://drive.google.com/file/d/1YIVeRBDloJK1fkrDG4jhvrrspo8CKtuW/view?usp=sharing"
//     }
//   ];

//   const shuffledTeamMembers = [...teamMembers].sort(() => Math.random() - 0.5);
//   const teamMemberCards = shuffledTeamMembers.map((member) => (
//     <div key={member.name} className="rounded-lg shadow-lg p-4 max-w-xl">
//       <div className="bg-slate-300 rounded-lg shadow-md p-4 transition duration-300 transform-gpu hover:scale-105 hover:shadow-custom dark:bg-slate-400">
//         <img
//           src={member.photoUrl}
//           alt={member.name}
//           className="mx-auto w-24 h-24 rounded-full mt-4"
//         />
//         <div className="text-center py-4">
//           <h2 className="text-lg font-semibold dark:text-black">
//             {member.name}
//           </h2>
//           <p className="text-sm text-gray-500 dark:text-gray-600">
//             {member.description}
//           </p>
//         </div>
//         <div className="flex justify-center space-x-2 pb-4">
//           <a
//             className="hover:scale-110"
//             href={member.linkedinUrl}
//             target="_blank"
//           >
//             <img src={member.linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
//           </a>
//           <a
//             className="hover:scale-110"
//             href={member.githubUrl}
//             target="_blank"
//           >
//             <img src={member.githubIcon} alt="Github" className="w-6 h-6" />
//           </a>
//             <a
//               className="hover:scale-110"
//               href={member.cvUrl}
//               target="_blank"
//               download
//             >
//               <img
//                 src={member.iconoCv}
//                 alt="Curriculum Vitae"
//                 className="w-6 h-6"
//               />
//             </a>
//         </div>
//       </div>
//     </div>
//   ));

  return (
    <div className="w-full mt-10">
        <h1 className="mb-2 text-4xl font-semibold text-center text-gray-700">
            Acerca de mí
        </h1>
        {/* <div className="w-4/5 mx-auto mt-8">
            <div className="flex justify-between">{teamMemberCards}</div>
        </div> */}
            
        <p className="mx-40 text-justify text-gray-600 py-10">
            Hola a todos me complace presentarles mi proyecto integrador de RickandMorty  con este aplicacion los usuarios podran explorar el universo de RickandMorty, gracias este aplicacion te permite buscar personajes especificados por su id, y tambien la aplicacion incluye una seccion de favoritos  para que puedas guardas tus personajes favoritos y los favoritos puedes hacer un filtrado por genero y tambien puedes ordenar espero que le disfruten de este app. 
        </p>
        <div className="w-full mt-1 font-medium text-gray-500 text-lg">
            <p className="mt-10 text-xl text-center">Tecnologías utilizadas</p>
            <div className="flex items-center justify-center my-5">
                <Link to="https://es.react.dev" target="_blank">
                    <SiReact className="text-3xl hover:scale-110 mr-6 hover:text-blue-700" />{" "}
                </Link>
                <Link to="https://redux.js.org" target="_blank">
                    <SiRedux className="text-3xl hover:scale-110 mr-6 hover:text-indigo-800" />{" "}
                </Link>
                <Link to="https://nodejs.org/es" target="_blank">
                    <SiNodedotjs className="text-3xl hover:scale-110 mr-6 hover:text-green-600" />{" "}
                </Link>
                <Link
                        to="https://developer.mozilla.org/es/docs/Web/HTML"
                        target="_blank"
                    >
                    <SiHtml5 className="text-3xl hover:scale-110 mr-6 hover:text-orange-600" />{" "}
                </Link>
                <Link
                        to="https://developer.mozilla.org/es/docs/Web/CSS"
                        target="_blank"
                    >
                    <SiCss3 className="text-3xl hover:scale-110 mr-6 hover:text-blue-700" />{" "}
                </Link>
                <Link to="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank">
                    <SiJavascript className="text-3xl hover:scale-110 mr-6 hover:text-yellow-400" />{" "}
                </Link>
                <Link to="https://git-scm.com" target="_blank">
                    <SiGit className="text-3xl hover:scale-110 mr-6 hover:text-orange-600" />{" "}
                </Link>
                <Link to="https://www.postgresql.org" target="_blank">
                    <SiPostgresql className="text-3xl hover:scale-110 mr-6 hover:text-blue-700" />{" "}
                </Link>
                <Link to="https://sequelize.org" target="_blank">
                    <SiSequelize className="text-3xl hover:scale-110 mr-6 hover:text-blue-700" />{" "}
                </Link>
                <Link to="https://github.com" target="_blank">
                    <SiGithub className="text-3xl hover:scale-110 mr-6 hover:text-gray-600" />{" "}
                </Link>
                <Link to="https://tailwindcss.com" target="_blank">
                    <SiTailwindcss className="text-3xl hover:scale-110 mr-6 hover:text-blue-500" />{" "}
                </Link>
            </div>
        </div>
    </div>
  );
};

export default About;