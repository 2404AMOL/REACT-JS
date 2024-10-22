function KeyIndex(){
    const name = ["Amol","Onkar","Ganesh","Rohit","Amol"];
    const nameList = name.map(name => <h4 key={name}>{name}</h4>)
    return <h4>{nameList}</h4>
}

export default KeyIndex;