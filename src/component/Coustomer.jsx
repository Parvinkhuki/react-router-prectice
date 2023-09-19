
import {  useLoaderData } from "react-router-dom";

const Coustomer = () => {
    const food=useLoaderData()
    console.log(food)
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-lg mx-auto p-5 ">
          {
            food.map((food,i)=><div key={i} >
             <div className="bg-black text-white p-5 rounded-xl ">
             <h1 className="text-2xl">name:{food.name}</h1>
              <p>{food.email}</p>
              <p>{food.username}</p>
              <p>{food.website}</p>
            
             </div>
            </div>)
          }
        </div>
    );
};

export default Coustomer;