import { NavLink } from "react-router-dom";

const LogoutNav = ()=>{

    return(
        <>
            <li>
                <NavLink 
                className={({ isActive, isPending }) =>
                 isPending ? "font-thin" : isActive ? "font-bold" : ""
                }
                to="/login">Sign In</NavLink>
            </li>
            <li>
                <NavLink 
                className={({ isActive, isPending }) =>
                 isPending ? "font-thin" : isActive ? "font-bold" : ""
                }
                to="/register">Sign Up</NavLink>
            </li>
        </>
    )
}

export { LogoutNav };