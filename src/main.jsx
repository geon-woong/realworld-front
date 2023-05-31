import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil';
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Root } from './routes/root'
import { Login } from './routes/login'
import { Register } from './routes/register'
import { ErrorPage } from './routes/error-page'
import { MyPage } from './routes/my-page';
import { Article } from './routes/article';
import { CreateArticle } from './routes/createArticle';
import { Profile } from './routes/profile';
import { EditArticle } from './routes/editArticle';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
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
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>,
)
