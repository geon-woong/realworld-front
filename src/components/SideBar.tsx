import { Link } from "react-router-dom"
import { useRecoilState, useRecoilValue,useSetRecoilState } from "recoil"
import { feedTag, feedToggle, isLoggedInAtom } from "../atom"

export const SideBar = () =>{
    const isLoggedIn = useRecoilValue(isLoggedInAtom)
    const setToggle =useSetRecoilState(feedToggle)
    const [tag,setTag] = useRecoilState(feedTag)

    return (
        <>
            
            <Link
             to="/dashboard"
             onClick={
                    ()=> {
                        setToggle(1)
                        setTag('')
                    }
             }
             >
               See All
            </Link>
            {
                isLoggedIn &&
                <>  
                    <Link 
                    to="/dashboard" 
                    onClick={()=>{
                        setToggle(0)
                        setTag('')
                    }
                    }>My Feed</Link>
                    <Link to="/create">
                    Write
                    </Link>
                </>
                }

            <p className="font-bold text-gray-700 ">
                { !!tag && `#${tag}`}
            </p>
        </>
    )
}