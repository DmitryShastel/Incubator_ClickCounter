import React, {useState} from 'react';
import './Counter_Redux/styles.css';
import {Display} from "./Display/Display";
import {Buttons} from "./Buttons/Button";
import {Button} from "./Buttons/Button2";
import {Display2} from "./Display2/Display2";



//type CounterValueType = number

function App() {

    return (
        <div></div>
    )


/*const [counter, setCounter] = useState<CounterValueType>(0)
const [limitReached, setLimitReached] = useState<boolean>(false)

    const increaseCounter = () => {
        let tempCounter = counter
        tempCounter++
        setCounter(tempCounter)
        if (tempCounter === 5) {
            setCounter(5)
            setLimitReached(true)
        }
    }

    const resetCounter = () => {
        setCounter(0)
        setLimitReached(false)
    }

    return (
        <div className="wrapper">
        {/!*<div className="App2">
            <Display2 value1={"maxvalue:"} value2={"startvalue:"}/>
            <Button  value={"SET"}/>
        </div>*!/}

            <div className="App">
                <Display value={counter}/>
                <Buttons  value={"INC"} callbackFn={increaseCounter} disabled={limitReached}/>
                <Buttons value={"RESET"} callbackFn={resetCounter} disabled={!limitReached}/>
            </div>
        </div>
    )*/
}

export default App;
