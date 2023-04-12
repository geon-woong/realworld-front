import { NavLink } from "react-router-dom";

const LogoutNav = ()=>{

    return(
        <>
            <li>
                <NavLink to="/login">Sign In</NavLink>
            </li>
            <li>
                <NavLink to="/register">Sign Up</NavLink>
            </li>
        </>
    )
}

export { LogoutNav };