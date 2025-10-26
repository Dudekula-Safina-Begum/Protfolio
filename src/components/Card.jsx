import React from "react";
import Bar from './Bar'

const Card = ({data}) => {
    // console.log(props)
    // // console.log(data)
    console.log(data.title,data.skills)
  return (
    <>
      <div className=" sm:w-1/3   bg-slate-200   sm:mb-10 mx-5 mt-10 flex items-center justify-center">
        <div className="text-blue-600 py-3 w-1/2 ">
          <h2 className="text-2xl font-bold">{data.title}</h2>
          
          {
            data.skills.map(({name,level})=>{
                return <Bar skill={{name,level}}/>
            })
          }
        </div>
      </div>
    </>
  );
};

export default Card;
