import  { Header } from '../components/Header'
import { Footer } from '../components/Footer';
import { SideBar } from '../components/SideBar';


export const Layout = ({ children }) => {
    const containerStyle = "grid-none sm:grid grid-cols-1 sm:grid-cols-4 min-h-screen"
    const sidebarBoxStyle ="border-r-none border-b sm:border-b-0 sm:border-r bg-white border-black px-10 py-5"
    return(
        <div>
            <Header/>
            <div className={containerStyle}>
                <div className={sidebarBoxStyle}>
                    <SideBar/>  
                </div>
                <div className="col-span-3">
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    )
}