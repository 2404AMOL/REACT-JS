import { RouterProvider,createBrowserRouter } from "react-router-dom"
import Home from './pages/Home'
import Course from './pages/Course'
import Root from "./component/Root"

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Root/>,
      children : [
        { 
          path : "/",
          element : <Home/>
        },
        {
          path  : "/Course",
          element : <Course/>
        }
      ]
    }
    
  ])
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
