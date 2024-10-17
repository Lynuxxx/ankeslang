import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import DashboardPage from './pages/dashboard';
import ServicePage from './pages/services';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import BookingPage from './pages/booking';

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <div>Hello Wolrd!</div>,
  //   errorElement: <h1>Hello World</h1>
  // },
  
  {
    path: "/",
    element: <DashboardPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/booking",
    element: <BookingPage/>
  },
  {
    path: "/about",
    element: <AboutPage/>
  },
  {
    path: "/contact",
    element: <ContactPage/>
  },
  {
    path: "/services",
    element: <ServicePage/>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
    
  </StrictMode>,
)
