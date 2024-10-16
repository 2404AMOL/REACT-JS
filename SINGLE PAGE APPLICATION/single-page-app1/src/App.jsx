import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Course from './pages/Course'

const roouter = createBrowserRouter([
  {
    path : "/",
    element : <Home/>
  },
  {
    path : "/Couse",
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
