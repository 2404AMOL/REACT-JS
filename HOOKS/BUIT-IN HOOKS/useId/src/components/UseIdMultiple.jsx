import React, { useId } from 'react'

export default function UseIdMultiple() {

    let id = useId()

    return (
        <form action="">
            <div>
                <label htmlFor={id+"name"}>NAME :</label>
                <input type="text" name="" id={id+"name"} />
            </div>
            <div>
                <label htmlFor={id+"email"}>Email :</label>
                <input type="email" name="" id={id+"email"} />
            </div>
        </form>
      )
    }