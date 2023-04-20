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
    // const navigate = useNavigate();

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
        setUser(data.user)
    }

    useEffect(() => {
        
        const initMy = ()=>{
            setMyInfo({
                ...user,
                password:''
            })
        }
        initMy()
        // if (!isLoggedIn) navigate('/', { replace: true });
    }, [user])
    
    

    return(
        <div className="form-container">
        <h1 className="page-title">Edit My Info</h1>
                <form onSubmit={onSubmit} >
                    <input onChange={onChange} value={email} type="email" name="email" placeholder="ID" />
                    <input onChange={onChange} value={username} type="text" name="username" placeholder="put your name" />
                    <input onChange={onChange} value={bio || ''} type="textarea" name="bio" placeholder="bio" className="min-h-[50px]" />
                    <input onChange={onChange} value={password} type="password" name="password" placeholder="password" />
                    <button type="submit" >submit</button>
                </form>
        </div>
    )
}