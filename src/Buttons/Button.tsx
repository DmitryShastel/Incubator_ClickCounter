import React from "react";
import s from './Buttons.module.css'

type PropsType = {
    value: string
    callbackFn: () => void
    disabled: boolean
}

export function Buttons(props: PropsType) {
    return (
                <button className={s.button}
                        onClick={props.callbackFn}
                        disabled={props.disabled}>{props.value}</button>

    )
}





