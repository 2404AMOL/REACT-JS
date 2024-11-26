export default function Child1(props) {
    return (
        <div>
            <button onClick={()=>{props.greetHandler('Child')}}>Greet Parent</button>
        </div>
      )
    }
    
