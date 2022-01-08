import React from "react";

export default function StartWindow(props) {

    return(
        <div className="startWindow">
            <div className="start__title">Quizzical</div>
            <div className="start__description">Check your knowledge</div>
            <button className="button" onClick={props.handler}>Start quiz</button>
        </div>
    )
}