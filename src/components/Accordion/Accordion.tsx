import React from "react";

type AccordionPropsType = {
    title: string
    collapsed: boolean
    callBack: (value: boolean) => void
}
export const Accordion = (props: AccordionPropsType) => {
    console.log('Rendering Accordion')
    return (
        <div>
            <AccordionTitle title={props.title} callBack={() => props.callBack(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    callBack: () => void
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log('Rendering AccordionTitle')
    return (
        <h3 onClick={props.callBack}>{props.title}</h3>
    )
}

const AccordionBody = () => {
    console.log('Rendering AccordionBody')
    return (
        <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
    )
}