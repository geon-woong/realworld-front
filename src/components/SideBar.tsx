import { Link } from "react-router-dom"
import { useRecoilValue,useSetRecoilState } from "recoil"
import { feedToggle, isLoggedInAtom } from "../atom"

export const SideBar = () =>{
    const isLoggedIn = useRecoilValue(isLoggedInAtom)
    const setToggle =useSetRecoilState(feedToggle)
    return (
        <>
            
            <Link
             to="/dashboard"
             onClick={
                 ()=> setToggle(1)
             }
             >
               See All
            </Link>
            {
                isLoggedIn &&
                <>  
                    <Link 
                    to="/dashboard" 
                    onClick={()=>setToggle(0)
                    }>My Feed</Link>
                    <Link to="/create">
                    Write
                    </Link>
                </>
                }
        </>
    )
}