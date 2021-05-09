import React from "react";
import s from './Buttons.module.css'

type PropsType = {
    value: string
}

export function Button(props:PropsType) {
    return (
        <button className={s.button}>{props.value}</button>


    )
}





