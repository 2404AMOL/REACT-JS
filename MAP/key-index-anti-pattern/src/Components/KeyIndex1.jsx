function KeyIndex1(){
    const name = ["Amol","Onkar","Ganesh","Rohit","Amol"];
    const nameList = name.map((name,index) => <h4 key={name}>{index} : {name}</h4>)
    return <h4>{nameList}</h4>
}

export default KeyIndex1;