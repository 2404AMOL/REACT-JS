import React from "react";
/* eslint-disable react/prop-types */
function MemoCompo ({name}){
    console.log("MEMO COMPONENT RENDERS");
    
    return(
        <>
            <h1>{name}</h1>
        </>
    )
}

export default React.memo(MemoCompo);
