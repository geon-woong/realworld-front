import { Outlet,  } from 'react-router';
import { useEffect, } from 'react';
import { getUser } from '../api/users';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isLoggedInAtom,userAtom } from '../atom';
import { ToastContainer } from 'react-toastify'
import { Layout } from '../Layout/index'
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

