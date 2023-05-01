import { useState,useEffect } from "react"
import {  userAtom } from "../atom"
import { useRecoilState } from "recoil"
import { putUser } from "../api/users"
import { toast } from 'react-toastify'
import { useForm } from "react-hook-form"
export const MyPage =()=>{
  
    const [user, setUser] = useRecoilState(userAtom);
    const { email, username, bio } = user;
    const { register,handleSubmit,reset} = useForm({
        defaultValues:{
            email:email,
            username:username,
            bio:bio,
            password:''
        }
    })


    const onSubmit = async(data)=>{
        const { user } = await putUser({
            user : 
            {
                username : data.username,
                email: data.email,
                password:data.password,
                bio: data.bio
            }
        })
        setUser(user)
        toast('Succeed')
    }

    useEffect(() => {
        reset({
            email: email,
            username: username,
            bio: bio,
            password: "",
        })
    }, [user])
    
    

    return(
        <div className="form-container">
        <h1 className="page-title">Edit My Info</h1>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <input {...register("email",{required:"email is required"})}  type="email" name="email" placeholder="ID" />
                    <input {...register("username",{required:"username is required"})} type="text" name="username" placeholder="put your name" />
                    <input {...register("bio")}  type="textarea" name="bio" placeholder="bio" className="min-h-[50px]" />
                    <input {...register("password")} type="password" name="password" placeholder="password" />
                    <button type="submit" >submit</button>
                </form>
        </div>
    )
}