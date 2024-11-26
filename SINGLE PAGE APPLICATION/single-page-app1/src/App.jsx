import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Course from './pages/Course'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>
  },
  {
    path : "/Course",
    element : <Course/>
  }
])
function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
