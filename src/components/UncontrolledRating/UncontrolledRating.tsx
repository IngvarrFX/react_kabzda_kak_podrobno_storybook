import React, {useState} from "react";
import {RatingValueType} from "../Rating/Rating";


type RatingPropsType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
}

export const UncontrolledRating = (props: RatingPropsType) => {
    let [value, setValue] = useState<RatingValueType>(0)
    console.log('Rendering Rating')

    const changeValue = () => {

    }
    return (
        <div>
            <Star selected={value > 0} callBack={() => setValue(1)}/>
            <Star selected={value > 1} callBack={() => setValue(2)}/>
            <Star selected={value > 2} callBack={() => setValue(3)}/>
            <Star selected={value > 3} callBack={() => setValue(4)}/>
            <Star selected={value > 4} callBack={() => setValue(5)}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    callBack: () => void
}

const Star = (props: StarPropsType) => {
    const onClickStar = () => {
        props.callBack()
    }
    console.log('Rendering Star')
    return <span onClick={onClickStar}> {props.selected ? <b> star </b> : 'star'}</span>


}
