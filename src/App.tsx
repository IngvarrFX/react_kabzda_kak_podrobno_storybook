import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";

export const App = () => {
    let [value, setValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState(false)
    let [on, setOn] = useState(false)

    const onChangeSwitchHandler = () => {
        setOn(!on)
    }

    return (
        <div className="App">
            <PageTitle title={'Hello programmer'}/>
            <Accordion title={'Menu'} collapsed={collapsed} callBack={setCollapsed}/>
            <Accordion title={'User'} collapsed={collapsed} callBack={setCollapsed}/>
            <Rating value={value} callBack={setValue}/>
            <OnOff callBack={onChangeSwitchHandler} on={on}/>
            <UncontrolledAccordion title={"Uncontrolled"}/>
            <UncontrolledRating/>
            <UncontrolledOnOff/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}
const PageTitle = (props: PageTitlePropsType) => {
    console.log('Rendering AppTitle')
    return <h1>{props.title}</h1>
}
