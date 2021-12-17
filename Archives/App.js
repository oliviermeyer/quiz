import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './App.css';

function App() {
    const [currentQuestion, gotToQuestion] = useState(0);
    const [result, setResult] = useState(0);
    const [test, setTest] = useState({
        name: "Intro test",
        results: [
            {
                label:"Extraverti",
                score:0,
                id:0
            },
            {
                label:"Introverti",
                score:0,
                id:1
            }
        ],
        questions: [
            {
                id: 0,
                question: "D'habitude,",
                selected: 0,
                answsers: [{
                    id: 1,
                    label: "vous vous mêlez bien aux autres",
                    checked: false,
                    resultId:0
                },
                    {
                        id: 2,
                        label: "vous êtes en retrait",
                        checked: false,
                        resultId:1
                    }
                ]
            },
            {
                id: 1,
                question: "Quand vous êtes avec un groupe de personnes, vous",
                selected: 0,
                answsers: [{
                    id: 1,
                    label: "parlez individuellement avec les gens que vous connaissez bien",
                    checked: false,
                    resultId:0
                },
                    {
                        id: 2,
                        label: "vous parlez à tout le groupe",
                        checked: false,
                        resultId:1
                    }
                ]
            },
            {
                id: 2,
                question: "Diriez-vous généralement que les autres",
                selected: 0,
                answsers: [{
                    id: 1,
                    label: "doivent prendre du temps pour apprendre à vous connaître",
                    checked: false,
                    resultId:0
                },
                    {
                        id: 2,
                        label: "font rapidement votre connaissance",
                        checked: false,
                        resultId:1
                    }
                ]
            },
            {
                id: 3,
                question: "Vous avez tendance à passer beaucoup de temps",
                selected: 0,
                answsers: [{
                    id: 1,
                    label: "avec vous-même",
                    checked: false,
                    resultId:0
                },
                    {
                        id: 2,
                        label: "avec les autres",
                        checked: false,
                        resultId:1
                    }
                ]
            },
            {
                id: 4,
                question: "Quand vous êtes avec un grand nombre de personnes,",
                selected: 0,
                answsers: [{
                    id: 1,
                    label: "ça vous donne de l'énergie",
                    checked: false,
                    resultId:0
                },
                    {
                        id: 2,
                        label: "ça vous épuise",
                        checked: false,
                        resultId:1
                    }
                ]
            },
            {
                id: 5,
                question: "Quel mot vous correspond le plus :",
                selected: 0,
                answsers: [{
                    id: 1,
                    label: "discret",
                    checked: false,
                    resultId:0
                },
                    {
                        id: 2,
                        label: "ouvert",
                        checked: false,
                        resultId:1
                    }
                ]
            },
            {
                id: 6,
                question: "Quel mot vous correspond le plus :",
                selected: 0,
                answsers: [{
                    id: 1,
                    label: "réservé",
                    checked: false,
                    resultId:0
                },
                    {
                        id: 2,
                        label: "bavard",
                        checked: false,
                        resultId:1
                    }
                ]
            }
        ]
    });

    const updateFieldChanged = index => e => {
        //console.log('index: ' + index);
        //console.log('property checked: '+ e.target.checked);
        let newTest = Object.assign({}, test); // copying the old datas array
        newTest.questions[currentQuestion].answsers[index].checked = e.target.checked; // replace e.target.value with whatever you want to change it to
        setTest(newTest);
    }

    const handleOptionChange = index => e => {
        let newTest = Object.assign({}, test); // copying the old datas array
        console.log(e.target.value);
        newTest.questions[currentQuestion].selected = e.target.value;
        setTest(newTest);
        viewResult();
    }


    const prevQuestion = index => e => {
        if (currentQuestion > 0) gotToQuestion(currentQuestion - 1)
    }

    const nextQuestion = index => e => {
        console.log(currentQuestion + " / " + test.length)
        if (currentQuestion < test.questions.length - 1) gotToQuestion(currentQuestion + 1)

    }
    const viewResult = ()  => {

        var scoreO=0;


            for (var j = 0; j < test.questions.length; j++) {
                let obj = test.questions[j].answsers.find(obj => obj.resultId == 0);
                console.log(obj.id);

                if (test.questions[j].selected == obj.id) scoreO++

            }

        setResult(scoreO)

    }

    const viewResult2 = ()  => {

        var scoreO=0;

        for (var i = 0; i < test.results.length; i++) {


            for (var j = 0; j < test.questions.length; j++) {
                let obj = test.questions[j].answsers.find(obj => obj.resultId == test.results[i].id);
                console.log(obj.id);

                if (test.questions[j].selected == obj.id) scoreO++

            }

        }

        console.log("scoreO = "+ scoreO)

    }

    return (
        <div className="App">

            <label>Question {currentQuestion + 1 + "/" + test.questions.length}</label>
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    total Extraverti: {result}
                    <h1> {test.questions[currentQuestion].question}</h1>
                    <div>
                        <div className="form-check">
                            {/* map over the users array */}
                            {test.questions[currentQuestion].answsers.map((answser) => (
                                // display a <div> element with the user.name and user.type
                                // parent element needs to have a unique key
                                <div key={answser.id}>
                                  {/*  <input className="form-check-input" type="checkbox"
                                           onChange={updateFieldChanged(answser.id)} checked={answser.checked} value=""
                                           id={answser.id}/>
                                    <label className="form-check-label" htmlFor={answser.id}>
                                        {answser.label}
                                    </label>*/}

                                    <label>
                                        <input type="radio" onChange={handleOptionChange(answser.id)}  value={answser.id} name="toto" checked={test.questions[currentQuestion].selected == answser.id}/>
                                        {answser.label}
                                    </label>

                                </div>


                            ))}
                        </div>
                    </div>


                    { (currentQuestion > 0) ? <Button variant="normal"  onClick={prevQuestion()}>Prev</Button> : "" }
                    <Button variant="primary" disabled={test.questions[currentQuestion].selected == 0}
                            onClick={nextQuestion()}>{currentQuestion == test.questions.length - 1 ? "View Result" : "Next"}</Button>
                </Card.Body>
            </Card>

        </div>
    );
}

export default App;
