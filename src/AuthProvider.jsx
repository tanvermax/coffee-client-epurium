import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "./firebase/firebase.init";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createnewUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

  

    const loginuser= (email ,password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth,email ,password)
    }

    // const deletuser= (email)=>{
    //     setLoading(true);
    //     return deleteUser(currentuser)
    // }



    // auth context
    const userInfo ={
        user,loading,createnewUser,loginuser
    }

   
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;