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
                <p className="truncate">
                    <Link to="/mypage" className=" px-2">MyPage</Link>
                </p>
            </li>
            <li>
                <button onClick={onLogout}>Log Out</button>
            </li>
        </>
    )
}

export { LoginNav };