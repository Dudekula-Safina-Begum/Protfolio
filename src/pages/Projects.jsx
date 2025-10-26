import React from 'react'
import Projectcard from '../components/Projectcard'
import {projects} from '../contexts/ProjectContext'
import { useContext } from 'react'

const Projects = () => {
  const list=useContext(projects)
  // console.log(list)
  return (
   <>
   <h1 className="text-3xl font-bold text-blue-600 text-center underline py-5">PROJECTS</h1>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
       {list.map((e,index)=>{
        return <Projectcard data={e}/>
       })}
   </div>
   </>
  )
}

export default Projects