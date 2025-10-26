import React, { useContext } from 'react'


const Projectcard = ({data}) => {
  console.log(data)
  
  return (
    <div className="bg-blue-100 m-5 shadow-md rounded-xl p-5 hover:shadow-lg transition duration-300">
      <img
      
        src={data.Image}
        alt="Project"
        className="rounded-lg mb-4 h-50 w-full"
      />
      <h2 className="text-xl font-bold text-blue-600">{data.Title}</h2>
      <p className="text-gray-600 text-sm mt-2">
       {data.Description}
      </p>
      <p className="text-sm text-gray-500 mt-2">Tech:{data.Skills}</p>

      <div className="flex justify-between mt-4">
        <a
          href={data.Live_demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          🔗 Live Demo
        </a>
        <a
          href={data.Github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:underline"
        >
          💻 View Code
        </a>
      </div>
    </div>
  )
}

export default Projectcard