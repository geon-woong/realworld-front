import  { Header } from '../components/Header'
import { Footer } from '../components/Footer';
import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { getUser } from '../api/users';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoggedInAtom,userAtom } from '../atom';
import { SideBar } from '../components/SideBar';
import { ToastContainer } from 'react-toastify'
import { LoginForm } from '../components/Login';

const Root = ()=>{
    /**
     * 로그인 상태
     */
    const setIsLoggedIn = useSetRecoilState(isLoggedInAtom);

    const isLoggedIn = useRecoilValue(isLoggedInAtom)
    /**
     * 사용자 상태
     */
    const setUser = useSetRecoilState(userAtom);

    const navigate = useNavigate();

    const currentPath = window.location.pathname;
    /**
     * 초기화 
     */
    const init = async()=>{
        const hasToken = !!localStorage.getItem('jwtToken')
        if(!hasToken)return;
        try {
            const { user } = await getUser();
            setIsLoggedIn(true)
            setUser(user)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        init();
        // navigate('/dashboard')
    },[setIsLoggedIn,setUser])

    return (
        <>
            <Header/>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="grid-none sm:grid grid-cols-1 sm:grid-cols-4 min-h-screen ">
                <div className="border-r-none border-b sm:border-b-0 sm:border-r bg-white border-black px-10 py-5">
                    <SideBar/>  
                </div>
                <div className="col-span-3">
                    {
                        currentPath != "/" ?
                        <Outlet/> :
                        <p className="p-10 font-bold text-lg">
                         banner
                        </p>
                    }
                </div>
            </div>
            <Footer/>
        </>
    )
}

export { Root };

