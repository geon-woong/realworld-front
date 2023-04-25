import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userAtom,isLoggedInAtom } from "../atom";
import { toast } from "react-toastify";
const LoginNav = ()=>{
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom);
    const [user, setUser] = useRecoilState(userAtom);
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
                <Link to="/mypage" className=" px-2 truncate">MyPage</Link>
            </li>
            <li>
                <button onClick={onLogout}>Log Out</button>
            </li>
        </>
    )
}

export { LoginNav };