import React from "react";
import s from '../Display2/Display2.module.css'

type DisplayType = {
    value1: string
    value2: string
}

export function Display2(props: DisplayType) {
    return (
        <div className={s.display2}>
            <div className="line1">
                <h3>{props.value1}</h3>
                <input type="number"/>
            </div>
            <h3>{props.value2}</h3>
            <input type="number"/>
        </div>
    );
}