import { useState,useEffect } from "react"
import {  userAtom } from "../atom"
import { useRecoilState } from "recoil"
import { putUser } from "../api/users"
import { toast } from 'react-toastify'
export const MyPage =()=>{
    const [myInfo,setMyInfo] = useState({
        email: '',
        username:'',
        bio:'',
        password:'',
    })
    const { email, username, bio, password} = myInfo;
    const [user, setUser] = useRecoilState(userAtom);

    const onChange =(event)=>{
        const { value,name } = event.target 
        setMyInfo({
            ...myInfo,
            [name]: value
        })
    }

    const onSubmit = async(event)=>{
        event.preventDefault();
        const { user } = await putUser({
            user : 
            {
                username : username,
                email: email,
                password:password,
                bio: bio
            }
        })
        setUser(user)
        toast('Succeed')
    }

    useEffect(() => {
        const initMy = ()=>{
            setMyInfo({
                ...user,
                password:''
            })
        }
        initMy()
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