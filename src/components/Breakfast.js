import React from "react";

import requiredata from "../data/data";
const Breakfast=()=>{
    return (
        <div>
{
    requiredata.map((item,index)=>(
        <div key={index}>
        {
            item.category === "breakfast" && 
            <div>
                <h1>{item.title}</h1>
        <img src={item.img} alt="pic"></img>
        <h1>{item.price}</h1>
        <h1>category : {item.category}</h1>
        <p>{item.desc}</p>
            </div>
        }
        
        </div>
    ))
}
        </div>
    )
}
export default Breakfast