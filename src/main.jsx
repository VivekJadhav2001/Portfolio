import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LocomotiveScroll from 'locomotive-scroll';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import About2 from './components/About2/About2.jsx'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx';
import About2 from './components/About2/About2.jsx';
import Skills from './pages/Skills.jsx'
import Project from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about2' element={<About2/>}/>
      <Route path='skills' element={<Skills/>}/>
      <Route path='resume' element={<Resume/>} />
      <Route path='projects' element={<Project/>} />
    </Route>
))

const locomotiveScroll = new LocomotiveScroll();
createRoot(document.getElementById('root')).render(

  
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App/> */}
  </StrictMode>,
  
)
