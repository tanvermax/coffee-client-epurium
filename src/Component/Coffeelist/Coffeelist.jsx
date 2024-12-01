import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import { useEffect, useState } from "react";


const Coffeelist = () => {

    
    const loadallcoffee= useLoaderData();

    const [allcoffee,setAllcoffe] = useState(loadallcoffee)

    const handledelt = (_id)=>{
        const remaiming = allcoffee.filter(coffee=> coffee._id !== _id);
        setAllcoffe(remaiming)
    }
    console.log(allcoffee);
    
    return (
        <div>
            <h1>all Coffee here{allcoffee.length}</h1>
            
            <div className="grid  grid-cols-2 gap-2">
            {
                allcoffee.map( allcoff => <CoffeeCard onDelete={handledelt} allcoff={allcoff} ></CoffeeCard>)
            }
            </div>
        </div>
    );
};

export default Coffeelist;