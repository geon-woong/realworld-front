import { Link } from "react-router-dom"
import { useRecoilState, useRecoilValue,useSetRecoilState } from "recoil"
import { feedTag, feedToggle, isLoggedInAtom } from "../atom"
import { TagsList } from "./TagsList"

export const SideBar = () =>{
    const isLoggedIn = useRecoilValue(isLoggedInAtom)
    const [toggle,setToggle] =useRecoilState(feedToggle)
    const [tag,setTag] = useRecoilState(feedTag)
    const activeClass = "font-bold text-slate-800"
    return (
        <div className="grid gap-1.5">
            <Link
             to="/"
             onClick={
                    ()=> {
                        setToggle(1)
                        setTag('')
                    }
             }
             className={ toggle && activeClass}
             >
               Global Feed
            </Link>
            {
                isLoggedIn &&
                <>  
                    <Link 
                    to="/" 
                    onClick={()=>{
                        setToggle(0)
                        setTag('')
                    }}
                    className={ !toggle && activeClass}
                    
                    >My Feed</Link>
                </>
                }
            <p className="font-bold text-gray-500 hover:line-through cursor-pointer" 
                onClick={
                    ()=>{
                        setTag('')
                        setToggle(1)
                    }}>
                { !!tag && `#${tag}`}
            </p>
        </div>
    )
}