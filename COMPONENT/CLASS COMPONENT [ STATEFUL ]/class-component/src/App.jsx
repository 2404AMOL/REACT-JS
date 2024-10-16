
import './App.css'
import Welcome from './components/Welcome'
import { FirstClass,SecondClass,ThirdClass,FourthClass } from './components/MultipleClass'
import { Navbar, Profile } from './components/ClassAndFunction'
function App() {


  return (
    <>
      <Welcome/>
      <FirstClass/>
      <SecondClass/>
      <ThirdClass/>
      <FourthClass/>
      <Navbar/>
      <Profile/>
    </>
  )
}

export default App
