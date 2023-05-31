import { Link } from "react-router-dom"
import { LogoutNav } from "./LogoutNav";
import { LoginNav } from "./LoginNav";
import { isLoggedInAtom } from '../atom'
import { useRecoilValue } from "recoil";
const Header = ()=>{

    const isLoggedIn = useRecoilValue(isLoggedInAtom)

    return(
        <nav className="flex justify-between px-10 py-5 border-b border-black">
                <div className="text-black underline-none">
                    <Link to="/">RealWorld</Link>
                </div>
                <ul className="flex gap-3">
                    {
                        isLoggedIn ? <LoginNav/> : <LogoutNav/>
                    }
                </ul>
        </nav>
    )
}

export { Header };