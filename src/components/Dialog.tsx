import { useState } from "react"
import { useRecoilState } from "recoil";
import { modalAtom } from "../atom";

export const Dialog = ()=>{
    const [ isVisible ] = useRecoilState(modalAtom);
    return(
        <div className={`
        flex fixed inset-0 top-0 left-0 z-50 justify-center items-center p-5 w-screen min-h-screen bg-center bg-no-repeat bg-cover outline-none focus:outline-none
        ${ isVisible ? 'opacity-100' : 'opacity-0'}
        `}>
            모대르
        </div>
    )
}