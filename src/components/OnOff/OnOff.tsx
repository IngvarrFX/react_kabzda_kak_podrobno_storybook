import React, {useState} from "react";
import styles from './OnOff.module.css'

type OnOffPropsType = {
    callBack: () => void
    on: boolean
}


export const OnOff = (props: OnOffPropsType) => {

    return (
        <div className={styles.switcher}>
            <div className={props.on ? styles.onActive : styles.on}
                 onClick={props.callBack}
            >on
            </div>
            <div className={props.on ? styles.off : styles.offActive}

                 onClick={props.callBack}>off
            </div>
            <div className={props.on ? styles.circleActive : styles.circle}></div>
        </div>
    )
}