import React from 'react'
import {data, data1} from '../App'
function ChildC() {
  return (
   <data.Consumer>
    {
        (name)=>{
            return(
                <data1.Consumer>
                    {
                        (value)=>{
                            return(
                                <div>
                                    <h2>Child C: {name} {value}</h2>
                                </div>
                            )
                        }
                    }
                </data1.Consumer>
            )
        }
    }

   </data.Consumer>
  )
}
export default ChildC
