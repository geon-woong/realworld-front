import  { Header } from '../components/Header'
import { Footer } from '../components/Footer';
import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { getUser } from '../api/users';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { feedTag, feedToggle, isLoggedInAtom,userAtom } from '../atom';
import { SideBar } from '../components/SideBar';
import { ToastContainer } from 'react-toastify'
import { DashBoard } from '../components/Dashboard';
import { Layout } from '../Layout';
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
    },[setIsLoggedIn,setUser])

    return (
        <>
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
            <Layout>
                  <Outlet/>
            </Layout>
            
        </>
    )
}

export { Root };

