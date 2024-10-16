import Img1 from './Images/apple-watch.png';
import Img2 from './assets/Goku.jpg'
import Greet from './components/Class Components/Greet'
import StudentClass from './components/Class Components/StudentClass'
import { employees } from './components/Functional Components/Array'
import Arrayprops from './components/Functional Components/ArrayProps'
import Card from './components/Functional Components/Card'
import CardDemo from './components/Functional Components/CardDemo'
import FunctionProps from './components/Functional Components/FunctionProps';
import Object from './components/Functional Components/ObjectProps'
import Props from './components/Functional Components/Props'
import PropsImmutable from './components/Functional Components/PropsImmutable'
import StringProps from './components/Functional Components/StringProps'
import Student from './components/Functional Components/Student'
import Task from './components/Functional Components/Task'
import ValueProps from './components/Functional Components/ValueProps';
function App() {
 
 let demo = function FunctionDemo(){
    return 1+2;
  }
  //! First Way 
  let a = {
    name : "Amol",
    age :24
  }
  let arr = [1,2,3,4,5]
  return (
    <>
      {/* <Student name = "Amol" email = "24amolpawar@gmail.com"/> */}
      {/* <Greet val = "Props From Class Component"/> */}
      {/* <Props name="Functional Component"/> */}

      {/* <div>
          {employees.map((emp) => (
          <Task className='task' name={emp.name} age={emp.age} retiredate={emp.retiredate} />
          ))}
      </div> */}


      {/* <Arrayprops arr={[10,20,30,40,50]}/> */}
      {/* <Object obj={{name : "Amol",age : 24,add:"Bhalawani"}}/> */}
      {/* <StudentClass name="Amol Pawar"/> */}

      {/* <Card one= "ONE" two={a} three ={arr}/>
      <Card one= "ONE" two={{a}} three ={{arr}}/>
      <Card one= "ONE" />
      <Card one= "ONE" obj={{name:"Amol",age:24,add:"Bhalwani"}} array ={[10,20,30,40,50]}/> */}
      
      {/* ========================================================================================== */}

      {/* <Card one= "ONE" two={{a}} three ={{arr}} four="Log IN" five="../src/Assets/Goku.jpg" />
      <Card one= "FUN" four="Log Out" five="src\Assets\download.jpg"  /> */}
      {/* <CardDemo one= "ONE" two={{a}} three ={{arr}} four="Log IN" five={Img1} />
      <CardDemo one= "FUN" four="Log Out" five={Img2} /> */}
      

       {/* <PropsImmutable name="Amol"/> */}
       {/* <StringProps name="Amol Pawar"/> */}

      {/* <ValueProps age={24}/> */}


      <FunctionProps Fun={demo}/>
    </>
  )
}

export default App
