import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginUser } from "../api/users";
import { isLoggedInAtom,userAtom } from "../atom";

const Login =()=>{
    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })
    const { email, password } = loginInfo;
    const [error, setError] = useState({
        email: '',
        password: '',
    })
    const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInAtom)
    const [user, setUser] = useRecoilState(userAtom);
    const onChange =(event: React.ChangeEvent<HTMLInputElement>)=>{
        const { name,value } = event.target;
        setLoginInfo({
            ...loginInfo,
            [name]: value,
        })
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
          const { data } = await loginUser({
              user: {
                  email: email,
                  password: password,
              },
          });
        setIsLoggedIn(true);
        setUser(data.user)
        navigate('/dashboard',{ replace: true })
        localStorage.setItem('jwtToken', data.user.token);
      };
    
      useEffect(()=>{
          if(isLoggedIn) navigate('/dashboard', { replace: true });
      },[isLoggedIn,navigate])

    return(
        <>
            <div className="mx-auto grid justify-center  bg-gray-100  w-96 rounded-xl">
                <h1 className="text-center my-5">로그인</h1>
                <form onSubmit={(event) => onSubmit(event)}>
                    <div className="grid gap-y-3 mb-5">
                    <input onChange={onChange} type="email" name="email" placeholder="아이디" />
                    <input onChange={onChange} type="password" name="password" placeholder="비밀번호" />
                    <button type="submit" className="p-2 border rounded-xl bg-gray-700 text-white">로그인</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export { Login };