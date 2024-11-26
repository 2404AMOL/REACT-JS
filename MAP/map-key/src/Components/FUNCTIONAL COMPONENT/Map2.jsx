//! 1.Rendering Arrays with map()

function Map2 () {
    let obj = [{id : 1,name : "Amol",age : 24,proff : "Software Developer",add : "Bhalawani"}]
    return(
        <>
            <h1>2.Rendering Object with map()</h1>
            {
                obj.map((data,index)=>(
                    <h4 key={index}>{data.id} || {data.name} || {data.age} || {data.proff} || {data.add}</h4>
                ))
            }
        </>
    )
}
export default Map2;