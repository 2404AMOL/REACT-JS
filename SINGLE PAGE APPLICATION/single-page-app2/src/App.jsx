import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Course from './pages/Course'

const router =  createBrowserRouter([
  {   
      path: '/', 
      element: <Home/> 
  },
  { 
    path : '/Course',
    element: <Course/>
  }
  // Add more routes here...
])
function App() {

  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
