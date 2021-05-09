import React from "react";
import s from './Display.module.css'

type DisplayType = {
    value: number
}

export function Display(props: DisplayType) {
    return (
        <div className={s.display}>
            <h1>{props.value}</h1>
        </div>
    );
}

