import React from "react";
import Answer from "./Answer";

export default function Question(props) {

    const answersTabs = props.item.answers.map((a,index)=>
        <Answer
            answer={a}
            id={index}
            checked={props.checked}
            correct_answer={props.item.correct_answer}
            questId={props.item.id}
            selectHandler={props.selectHandler}
            selectedAnswer={props.item.selectedAnswer}
        />)

    return(
        <div className="question">
            <p className="question__title">{props.item.question}</p>
            <div className="question__answers">{answersTabs}</div>
            <div className="line"/>
        </div>
    )

}