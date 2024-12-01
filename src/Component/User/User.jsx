import { useLoaderData } from "react-router-dom";
import UserCard from "./UserCard";
import {   useState } from "react";





const User = () => {
 
    const loaduserData = useLoaderData();
 

    const [userData ,setUserdata] = useState(loaduserData);
    return (
        <div className="w-11/12 mx-auto">
            <h1>All user : {userData.length}</h1>
            <div className="grid lg:grid-cols-3 grid-cols-2">
                {
                    userData.map( user=> <UserCard userData={userData} setUserdata={setUserdata} key={user._id} user={user}></UserCard>)
                }
            </div>
        </div>
    );
};

export default User;