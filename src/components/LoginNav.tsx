import { NavLink, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userAtom,isLoggedInAtom } from "../atom";
import { toast } from "react-toastify";
const LoginNav = ()=>{
    const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);
    const setUser = useSetRecoilState(userAtom);
    const navigate = useNavigate()
    const onLogout = ()=>{
        setIsLoggedIn(false);
        localStorage.removeItem('jwtToken');
        setUser({ email: '', username: '', bio: '', image: '' });
        toast('Logged Out!')
        navigate('/',{replace:true})
    }
    
    return(
        <>
            <li>
                <NavLink 
                className={({ isActive, isPending }) =>
                 isPending ? "font-thin" : isActive ? "font-bold" : ""
                    }
                
                to="/create">New article</NavLink>
            </li>
            <li>
                <NavLink 
                className={({ isActive, isPending }) =>
                 isPending ? "font-thin" : isActive ? "font-bold" : ""
                }
                to="/mypage">MyPage</NavLink>
            </li>
            <li>
                <button onClick={onLogout}>Log Out</button>
            </li>
        </>
    )
}

export { LoginNav };