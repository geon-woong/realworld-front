import { useNavigate } from 'react-router-dom'
import { registerUser } from '../api/users'
import { isLoggedInAtom,userAtom } from '../atom'
import { useSetRecoilState, useRecoilState } from 'recoil'
import { useState,useEffect } from 'react'

const Register = ()=>{
 
    const navigate = useNavigate();
    const [account, setAccount] = useState({
        username : '',
        email : '',
        password :'',
    });
    const { username,email,password } = account;
    const [error, setError] = useState({
        username : '',
        email : '',
        password :'',
    });
    const [isLoggedIn,setIsLoggedIn] = useRecoilState(isLoggedInAtom);
    const [user,setUser] = useRecoilState(userAtom);

    const onChange =(event)=>{
        const { name, value } = event.target;
        setAccount({
            ...account,
            [name]: value,
        })
    };
    

    const onSubmit = async(event)=>{
        event.preventDefault();
            const { data } = await registerUser({
                user: {
                    username: username,
                    email: email,
                    password: password,
                }
            })
            setIsLoggedIn(true)
            setUser(data.user);
            navigate('/', { replace: true });
            localStorage.setItem('jwtToken', data.user.token);
    };
    
    useEffect(()=>{
        if(isLoggedIn) navigate('/',{replace: true})
    },[isLoggedIn,navigate])

    return (
        <div className="form-container">
        <h1 className="page-title">Join</h1>
            <form  onSubmit={(event)=>onSubmit(event)}>
                <div className="grid gap-y-5 mb-5">
                <input onChange={onChange} type="text" name="username" placeholder="이름" />
                <input onChange={onChange} type="email" name="email" placeholder="아이디" />
                <input onChange={onChange} type="password" name="password" placeholder="비밀번호" />
                <button type="submit"  className="p-2 border rounded-xl bg-gray-700 text-white">join</button>
                </div>
            </form>
        </div>
    )
}

export { Register }