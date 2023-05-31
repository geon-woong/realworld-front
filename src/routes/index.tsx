import { createBrowserRouter } from 'react-router-dom'
import { Root } from './root'
import { Login } from './login'
import { Register } from './register'
import { ErrorPage } from './error-page'
import { MyPage } from './my-page';
import { Article } from './article';
import { CreateArticle } from './createArticle';
import { Profile } from './profile';
import { EditArticle } from './editArticle';
export const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      errorElement: <ErrorPage/>,
    },
    {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
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
  ])
  