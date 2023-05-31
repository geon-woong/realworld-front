import { createBrowserRouter,createHashRouter } from 'react-router-dom'
import { Root } from './root'
import { Login } from './login'
import { Register } from './register'
import { ErrorPage } from './error-page'
import { MyPage } from './my-page';
import { Article } from './article';
import { CreateArticle } from './createArticle';
import { Profile } from './profile';
import { EditArticle } from './editArticle';
import { DashBoard } from '../components/Dashboard'
export const router = createHashRouter([
    {
      path: '/',
      element: <Root/>,
      errorElement: <ErrorPage/>,
      children:[
      {
        index: true,
        element: <DashBoard />
      },
      {
        path: '/mypage',
        element: <MyPage/>
      },
      {
        path: '/profile/:username',
        element: <Profile/>
      },
      {
        path: `/article/:slug`,
        element: <Article/>,
      },
      {
        path: '/edit/:slug',
        element: <EditArticle/>,
      },
      {
        path: '/create',
        element: <CreateArticle/>,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      ]
    },
    
      
  ])
  