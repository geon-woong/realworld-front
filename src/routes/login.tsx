import { useState,useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginUser } from "../api/users";
import { isLoggedInAtom,userAtom } from "../atom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const Login =()=>{

    interface Ilogin{
        email: string,
        password: string,
    }
    /**
     * react-hook-form
     */
    const { register, handleSubmit,formState:{errors} } = useForm({
        defaultValues:{
            email:'',
            password:''
        }
    })
    const navigate = useNavigate();
    
    const [error, setError] = useState({
        emailOrPwd: '',
    })
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom)
    const [user, setUser] = useRecoilState(userAtom);
    

    const onSubmit = async (data :Ilogin) => {
        try {
            const { user } = await loginUser({
                user: {
                    email: data.email,
                    password: data.password,
                },
            });
            localStorage.setItem('jwtToken', user.token);
            setIsLoggedIn(true);
            setUser(user)
            toast('Logged in')
            navigate('/'),{replace:true}
        } catch (error) {
            const errorMessage = error.response.data.errors
            setError({
                emailOrPwd: errorMessage['email or password'],
            })
        }
      };
    
      useEffect(()=>{
          if(isLoggedIn) navigate('/dashboard', { replace: true });
      },[isLoggedIn,navigate])

    return(
        <>
            <div className="form-container">
                <h1 className="page-title">Sign In</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email",{required: "email is required"})} type="email" name="email" placeholder="email" />
                    <p className="text-xs text-red-600 font-semibold">{errors.email?.message}</p>
                    <input {...register("password",{required: "password is required"})} type="password" name="password" placeholder="password" />
                    <p className="text-xs text-red-600 font-semibold">{errors.password?.message}</p>
                    <p className="text-xs text-red-600 font-semibold">{ error.emailOrPwd && `email or password is invalid`}</p>
                    <button type="submit">sign in</button>
                </form>
                <Link to="/register" className="text-center pointer text-gray-300 underline">need account?</Link>
            </div>
        </>
    )
}

export { Login };