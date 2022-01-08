import './App.css';
import React from "react";
import YellowBlob from "./images/yellow_blob.svg";
import BlueBlob from "./images/blue_blob.svg";
import StartWindow from "./Modules/StartWindow";
import Quiz from "./Modules/Quiz";

export default function App() {

    const [started, setStarted] = React.useState(false)

    function StartedToggle(){
        setStarted(prev=>!prev)
    }

    return (
        <div>
            <img className="yellow_blob" src={YellowBlob}/>
            <img className="blue_blob" src={BlueBlob}/>
            {started ? <Quiz /> : <StartWindow handler={StartedToggle}/>}


        </div>
    )

}

