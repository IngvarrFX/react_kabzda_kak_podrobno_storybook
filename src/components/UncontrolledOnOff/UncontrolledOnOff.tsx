import React, {useState} from "react";
import styles from './UncontrolledOnOff.module.css'

type OnOffPropsType = {
    //on: boolean
}


export const UncontrolledOnOff = (props: OnOffPropsType) => {

    let [on, setOn] = useState(false)
    return (
        <div className={styles.switcher}>
            <div className={on ? styles.onActive : styles.on}
                 onClick={() => setOn(true)}
            >on
            </div>
            <div className={on ? styles.off : styles.offActive}

                 onClick={() => setOn(false)}>off
            </div>
            <div className={on ? styles.circleActive : styles.circle}></div>
        </div>
    )
}