//! 1.Rendering Arrays with map()
function Map1 (){
        let Fruits = ["Apple", "Banana","Cherry","Pineapple"]
    return(
        <>
            <h1>Fruits I Liked : </h1>
            <h2>1.Rendering Arrays with map()</h2>
            {
                Fruits.map((data,index)=>(
                    <h4 key={index}>{index} : {data}</h4>
                ))
            }
        </>
    )
}
export default Map1;
//! The key as props mandatory to pass as an attribut in the tag.