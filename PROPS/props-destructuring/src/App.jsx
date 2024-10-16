
import './App.css'
import PropsObjectClass from './components/CLASS COMPONENTS/PropsObjectClass'
import PropsDefaultValue from './components/FUNCTIONAL COMPONENTS/PropsDefaultValue'
import PropsDes from './components/FUNCTIONAL COMPONENTS/PropsDes'
import PropsDes1 from './components/FUNCTIONAL COMPONENTS/PropsDes1'
import PropsDesObj from './components/FUNCTIONAL COMPONENTS/PropsDesObj'
import PropsDestructuring from './components/FUNCTIONAL COMPONENTS/PropsDestructuring'


function App() {
  //! First Way 
  let a ={
    name : "Amol",
    age :24
  }
  let arr = [1,2,3,4,5]
  return (
    <>

      {/* <PropsDestructuring one= "ONE" two={a} three ={arr}/> */}
      {/* <PropsDestructuring one= "ONE" two={{a}} three ={{arr}}/>
      <PropsDestructuring />
      <PropsDestructuring one= "ONE" /> */}
      {/* <PropsDestructuring one= "ONE" obj={{name:"Amol",age:24,add:"Bhalwani"}} array ={[10,20,30,40,50]}/> */}

      {/* <PropsDes name = "Amol" age="24"/> */}
      {/* <PropsDesObj obj={{name:"Amol",age:24,add:"Bhalawani"}}/> */}

      {/* <PropsDes1 name="Amol" proff="Software Developer"/>
      <PropsObjectClass obj={{name:"Amol" ,age :24 ,add :"Bhalawnai"}}/>
      <PropsDes1 name="Amol Pawar"/>
      <PropsDes name="Amol" age={24}/> */}

      <PropsDefaultValue name="John" age={28}/>
    </>
  )
}

export default App
