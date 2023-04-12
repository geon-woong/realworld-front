import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { userAtom,isLoggedInAtom } from "../atom";

const LoginNav = ()=>{
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom);
    const [user, setUser] = useRecoilState(userAtom);

    const onLogout =(event)=>{
        event.preventDefault();
        setIsLoggedIn(false)
        setUser({ email: '', username: '', bio: '', image: '' });
        localStorage.removeItem('jwtToken');
        

    }
    return(
        <>
            <li>
                <Link to="/mypage" className=" px-2 truncate">MyPage</Link>
            </li>
            <li>
                <button onClick={onLogout}>Log Out</button>
            </li>
        </>
    )
}

export { LoginNav };