import React, {useState} from "react"
const Counter=()=>{
    const[count, setcount]=useState(0)
    const incrCount=()=>{
        setcount(count+1)
    }
    return
    (
        <button>onClick={(Counter)=>(count)}</button>

    )
}
