
import { useState } from "react"

export const useCounter = (initialValue = 0, limit = 100) => {
    
    const [counter, setCounter] = useState(initialValue)

    const increment = () => {
        if(counter<limit){
            setCounter(counter + 1);
        }
    }

    const decrement = () => {
        if( counter === 0 ) return;
        setCounter(counter - 1);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}