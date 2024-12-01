import { Outlet } from "react-router-dom";
import { NavLink } from "react-router"
import AddCoffe from "./AddCoffee/AddCoffe";

const Mainlayout = () => {
    return (
        <div className="text-center text-3xl">
            <h1 className="font-bold">this is main layout</h1>
            <nav className="flex justify-center gap-9 text-orange-400">
                <p><NavLink to={'addcoffee'}>Add coffee</NavLink></p>
                <p><NavLink to={'coffelist'}>Coffee list</NavLink></p>
                <p><NavLink to={'users'}>Users</NavLink></p>
                <p><NavLink to={'signin'}>Sign in</NavLink></p>
                <p><NavLink to={'login'}>Log in</NavLink></p>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;