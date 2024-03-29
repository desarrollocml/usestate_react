import React,{useState} from 'react'

export default function CounterApp() {
    const[counter, setCounter]= useState(0);
    const incrementCounter = ()=>{
        setCounter(counter+1);
        setCounter(prevCounter => prevCounter+1);
    }
    return (
        <div>
            <button onClick={incrementCounter}>
                increment
            </button>
            <h1>Clicks: {counter}</h1>
        </div>
    )
}
