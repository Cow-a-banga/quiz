import React from "react";

export default function Answer(props) {

    const selected = props.id === props.selectedAnswer ? "selected" : ""

    const correct = props.checked ?
        props.answer === props.correct_answer ?
            "correct" : selected !== "" ? "incorrect"
                : ""
        : ""

    return(
        <div className={`answer ${selected} ${correct}`} onClick={!props.checked ?()=>props.selectHandler(props.questId, props.id) : ()=>{}}>
            {props.answer}
        </div>
    )
}