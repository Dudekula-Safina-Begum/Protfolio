import React, { createContext } from 'react'

export const projects=createContext()

const ProjectContext = ({children}) => {

 const   projectsList=[{
    Image:"/shopeasy.png",
Title:"Shopeasy",
Description:"A responsive e-commerce web application built with React. It allows users to browse products, add or remove items from the cart, and view detailed product information. Product data is fetched from the Fake Store API.",
Skills:"React,react-route,tailwindcss",
Live_demo:"https://dudekula-safina-begum.github.io/shopeasy/",
Github:"https://github.com/Dudekula-Safina-Begum/shopeasy"
},
{
    Image:"/ETM.png",
Title:"Admin-employee-task-management-localstorage",
Description:"A task management application where the admin can assign new tasks to employees, and employees can view their assigned tasks. Local Storage is used for user authentication and data persistence. ",
Skills:"React,Local storage,tailwindcss",
Live_demo:"https://dudekula-safina-begum.github.io/admin-employee-task-management-localstorage/",
Github:"https://github.com/Dudekula-Safina-Begum/admin-employee-task-management-localstorage"
},
{
    Image:"/Ochi.png",
Title:"Ochi",
Description:"A modern front-end design that implements smooth scrolling and interactive animations using GSAP and Locomotive Scroll. Various elements move and animate in response to user cursor for a visually engaging experience.",
Skills:"framer-motion,gsap,locomotive-scroll,react,react-dom",
Live_demo:" https://dudekula-safina-begum.github.io/ochi/",
Github:"https://github.com/Dudekula-Safina-Begum/ochi"
},
{
    Image:"admin-f.png",
Title:"admin-employee-task-management",
Description:"A full-stack web application built with the MERN stack. The project uses MongoDB for data storage, JWT and bcrypt for secure authentication, and Axios to handle communication between the React frontend and Node.js backend. ",
Skills:" axios,react,bcrypt,cookie-parser,express,jsonwebtoken,mongoose",
Live_demo:"https://github.com/Dudekula-Safina-Begum/admin-employee-task-management",
Github:"https://github.com/Dudekula-Safina-Begum/admin-employee-task-management"
},
{
    Image:"/Cynthia_Ugwu.png",
Title:"Cynthia-Ugwu",
Description:"A front-end clone inspired by the award-winning website of Cynthia Ugwu. The project utilizes GSAP for advanced animations, Locomotive Scroll for smooth scrolling, and JavaScript for dynamic cursor and motion effects to enhance interactivity.",
Skills:"Javascript,gsap,locomotive-scroll",
Live_demo:"https://dudekula-safina-begum.github.io/Cynthia-Ugwu/",
Github:"https://github.com/Dudekula-Safina-Begum/Cynthia-Ugwu"
}

]
  return (
    <projects.Provider value={projectsList}>

        {children}
    </projects.Provider>
    
   
  )
}

export default ProjectContext