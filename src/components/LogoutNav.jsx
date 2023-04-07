import { NavLink } from "react-router-dom";

const LogoutNav = ()=>{

    return(
        <>
            <li>
                <NavLink to="/login">로그인</NavLink>
            </li>
            <li>
                <NavLink to="/register">가입</NavLink>
            </li>
        </>
    )
}

export { LogoutNav };