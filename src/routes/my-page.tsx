import { useState,useEffect } from "react"
import { isLoggedInAtom, userAtom } from "../atom"
import { useRecoilState, useRecoilValue } from "recoil"
import { putUser } from "../api/users"
import { useNavigate } from "react-router"
import React from "react"
export const MyPage =()=>{
    const isLoggedIn = useRecoilValue(isLoggedInAtom);
    const [myInfo,setMyInfo] = useState({
        email: '',
        username:'',
        bio:'',
        password:'',
    })
    const { email, username, bio, password} = myInfo;
    const [user, setUser] = useRecoilState(userAtom);
    const navigate = useNavigate();

    const onChange =(event)=>{
        const { value,name } = event.target 
        setMyInfo({
            ...myInfo,
            [name]: value
        })
    }

    const onSubmit = async(event)=>{
        event.preventDefault();
        const { data } = await putUser({
            user : 
            {
                username : username,
                email: email,
                password:password,
                bio: bio
            }
        })
        console.log(data)
        setUser(data.user)
    }

    useEffect(() => {
        if(!isLoggedIn) navigate('/login',{replace:true})
        const initMy = ()=>{
            setMyInfo({
                ...user,
                password:''
            })
        }
        initMy()
    }, [user])

    

    return(
        <div className="mx-auto grid justify-center  bg-gray-100  w-96 rounded-xl">
        <h1 className="text-center my-5">마이페이지</h1>
                <form onSubmit={onSubmit} >
                <div className="grid gap-y-3 mb-5">
                    <input onChange={onChange} value={email} type="email" name="email" placeholder="아이디" />
                    <input onChange={onChange} value={username} type="text" name="username" placeholder="이름" />
                    <input onChange={onChange} value={bio || ''} type="textarea" name="bio" placeholder="당신에 대해 알려주세요" className="min-h-[50px]" />
                    <input onChange={onChange} value={password} type="password" name="password" placeholder="비밀번호" />
                    <button type="submit" className="p-2 border rounded-xl bg-gray-700 text-white">수정</button>
                    </div>
                </form>
        </div>
    )
}