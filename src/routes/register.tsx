import { useNavigate } from 'react-router-dom'
import { registerUser } from '../api/users'
import { isLoggedInAtom,userAtom } from '../atom'
import {  useRecoilState, useSetRecoilState } from 'recoil'
import { useEffect,useState } from 'react'
import { useForm} from 'react-hook-form'
import { AuthUser } from '../types'
import { toast } from 'react-toastify'
const Register = ()=>{
    const navigate = useNavigate();
    const { register, handleSubmit,formState:{errors} } = useForm({
        defaultValues:{
            username: '',
            email: '',
            password: '',
        }
    })
   
    const [isLoggedIn,setIsLoggedIn] = useRecoilState(isLoggedInAtom);
    const [error, setError] = useState({
        email: '',
        username:'',
    })
    const setUser = useSetRecoilState(userAtom);

    const onSubmit = async(data:AuthUser)=>{
        try {
            const { user } = await registerUser({
                user: {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                }
            })
            setIsLoggedIn(true)
            setUser(user);
            navigate('/', { replace: true });
            localStorage.setItem('jwtToken', user.token);
            toast(`Welcome ${user.username}`);
        } catch (e) {
            console.log(e.response.data.errors.email)
            const errorMessage = e.response.data.errors
            setError({
                email: `email ${errorMessage.email}`,
                username: `username ${errorMessage.username}`,
            })
        }
    };
    
    useEffect(()=>{
        if(isLoggedIn) navigate('/',{replace: true})
    },[isLoggedIn,navigate])

    return (
        <div className="form-container">
        <h1 className="page-title">Join</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("username",{ required: "username is required"})} type="text" name="username" placeholder="name" />
                <p className="text-xs text-red-600 font-semibold">{errors.username?.message}</p>
                <input 
                {...register("email",{
                     required: "email is required",
                     pattern: {
                         value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                         message: "it's not an email pattern"
                     }
                    })} 
                type="email" 
                name="email" 
                placeholder="email" />
                <p className="text-xs text-red-600 font-semibold">{errors.email?.message}</p>
                <input {...register("password",{ required: "password is required"})} type="password" name="password" placeholder="password" />
                <p className="text-xs text-red-600 font-semibold">{errors.password?.message}</p>
                <p className="text-xs text-red-600 font-semibold">{ error.email }</p>
                <p className="text-xs text-red-600 font-semibold">{ error.username }</p>
                <button type="submit"  className="p-2 border rounded-xl bg-gray-700 text-white">join</button>
            </form>
        </div>
    )
}

export { Register }