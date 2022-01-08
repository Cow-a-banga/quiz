import React from "react";
import Question from "./Question"
import { nanoid } from 'nanoid'

export default function Quiz() {
    const [questions, setQuestions] = React.useState([])
    const [reload, setReload] = React.useState(true)
    const [checked, setChecked] = React.useState(false)
    const [isLoaded, setIsLoaded] = React.useState(false)

    function selectAnswer(questId, answerId){
        setQuestions(prev=>prev.map(q=>{
            if(q.id === questId){
                return {
                    ...q,
                    selectedAnswer: answerId
                }
            }else{
                return q
            }
        }))
    }

    function convert(str)
    {
        str = str.replace(/&quot;/g, "\"");
        str = str.replace(/&#039;/g, "'");

        return str;
    }

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=6&type=multiple")
            .then(res => res.json())
            .then(data => data.results.map(q=>(
                {
                    id: nanoid(),
                    question: convert(q.question),
                    correct_answer: convert(q.correct_answer),
                    answers: [q.correct_answer, ...q.incorrect_answers].sort().map(e=>convert(e)),
                    selectedAnswer: -1
                }
            )))
            .then(data=>{
                setIsLoaded(true)
                setQuestions(data)
            })
    }, [reload])

    function checkAnswers(){
        setChecked(true)
    }

    function reloadQuiz(){
        setReload(prev=>!prev)
        setChecked(false)
        setIsLoaded(false)
    }

    const quests = questions.map(q => (<Question item={q} selectHandler={selectAnswer} checked={checked}/>))

    return(
        <div className="quiz">

            {isLoaded ?

                <div className="questions">
                    {quests}
                </div>
                :
                <div></div>
            }

            {checked && <div className="result">You
                scored {questions.filter(q=>q.selectedAnswer && q.correct_answer === q.answers[q.selectedAnswer]).length}
                /{questions.length}correct answers</div>}

            {isLoaded ?

            <button className="button" style={{marginTop:"20px"}} onClick={checked ? reloadQuiz : checkAnswers}>
                {checked ? "Start new quiz" : "Check answers"}
            </button>

            :

            <div className="loading">Loading...</div>
                }
        </div>
    )

}