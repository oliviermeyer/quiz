import React, {useState} from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import { useSpring, animated } from 'react-spring'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Slide from '@mui/material/Slide';
import Icon from '@material-ui/core/Icon';
import './App.css';
import {ThemeProvider, createTheme, styled} from '@mui/material/styles';
const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#ffffff',
        },
        background: {
            default: '#310000',
            paper: '#731010',
        },
        text: {
            primary: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Helvetica Neue',
    },
    shape: {
        borderRadius: 30,
    },
});
const ButtonCTA = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    backgroundColor: 'rgba(255,255,255,1)',
    color: '#F05A57',
    height:'58px',
    padding:'0 3rem',
    fontFamily: [
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: 'rgba(255,255,255,1)',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
    '&:disabled': {
        backgroundColor: 'rgba(255,255,255,.3)',
        color: 'rgba(235,90,93,1)',
    },
});
const ButtonPrimary = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    backgroundColor: 'rgba(255,255,255,.5)',
    color: '#F05A57',
    height:'58px',
    padding:'0 3rem',
    fontFamily: [
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: 'rgba(255,255,255,.7)',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: 'rgba(255,255,255,1)',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
    '&:disabled': {
        backgroundColor: 'rgba(255,255,255,.7)',
        color: 'rgba(235,90,93,.4)',
    },
});
const RadioQuiz = styled(Radio)({
    borderRadius: '50%',
    width: 32,
    height: 32,
    color:'#FFFFFF',
});


function App() {


    const [currentQuestion, gotToQuestion] = useState(0);
    const [result, setResult] = useState(0);
    const [test, setTest] = useState({
        name: "Intro test",
        results: [
            {
                label: "Extraverti",
                score: 0,
                id: 0
            },
            {
                label: "Introverti",
                score: 0,
                id: 1
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
                    resultId: 0
                },
                    {
                        id: 2,
                        label: "vous êtes en retrait",
                        checked: false,
                        resultId: 1
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
                    resultId: 1
                },
                    {
                        id: 2,
                        label: "vous parlez à tout le groupe",
                        checked: false,
                        resultId: 0
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
                    resultId: 1
                },
                    {
                        id: 2,
                        label: "font rapidement votre connaissance",
                        checked: false,
                        resultId: 0
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
                    resultId: 1
                },
                    {
                        id: 2,
                        label: "avec les autres",
                        checked: false,
                        resultId: 0
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
                    resultId: 0
                },
                    {
                        id: 2,
                        label: "ça vous épuise",
                        checked: false,
                        resultId: 1
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
                    resultId: 1
                },
                    {
                        id: 2,
                        label: "ouvert",
                        checked: false,
                        resultId: 0
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
                    resultId: 1
                },
                    {
                        id: 2,
                        label: "bavard",
                        checked: false,
                        resultId: 0
                    }
                ]
            }
        ]
    });
    const [doSlide, setDoSlide] = useState(true);

    const handleOptionChange = index => e => {
        let newTest = Object.assign({}, test); // copying the old datas array
        console.log(e.target.value);
        newTest.questions[currentQuestion].selected = e.target.value;

        newTest.results[0].score = getScore0(0);
        newTest.results[1].score = getScore0(1);
        setTest(newTest);

    }


    const prevQuestion = index => e => {
        if (currentQuestion > 0) gotToQuestion(currentQuestion - 1)
    }

    const nextQuestion = index => e => {
        console.log(currentQuestion + " / " + test.length)
        setDoSlide(true);
        if (currentQuestion < test.questions.length - 1) gotToQuestion(currentQuestion + 1)

    }
    const getScore0 = (index) => {
        var scoreO = 0;
        for (var j = 0; j < test.questions.length; j++) {
            let obj = test.questions[j].answsers.find(obj => obj.resultId == index);
            console.log(obj.id);

            if (test.questions[j].selected == obj.id) scoreO++

        }

        return scoreO;

    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });


    return (
        <div  className="App ">

            <ThemeProvider theme={theme}><CssBaseline/>
                <div className="topnav">





                    {(currentQuestion > 0) ? <IconButton aria-label="back" onClick={prevQuestion()}>
                        <Icon>arrow_back</Icon>
                    </IconButton>: <div></div>}

                    <div>
                        <div></div>
                       {/* <Button
                            id="basic-button"
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            More...
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>*/}
                    </div>

                </div>

                <div>

                        <animated.div style={props} class="quiz">
                         <Slide  direction="down" in={doSlide}  mountOnEnter unmountOnExit>
                        <div class="quiz-form">
                        {/*                    total Extraverti: {test.results[0].score}<br/>
                    total Introverti: {test.results[1].score}*/}


                            <Typography variant="h4" component="h2" gutterBottom>
                                {test.questions[currentQuestion].question}
                            </Typography>

                        <div className='quiz-answsers'> <RadioGroup
                            aria-label="gender"
                            defaultValue="female"
                            name="radio-buttons-group"
                            style={{color:'#F05A57'}}
                        >


                            {/* map over the users array */}
                            {test.questions[currentQuestion].answsers.map((answser) => (


                                <div key={answser.id}>
                                    <FormControlLabel className={(test.questions[currentQuestion].selected == answser.id ? ' checked' : '')} onChange={handleOptionChange(answser.id)}
                                                      checked={test.questions[currentQuestion].selected == answser.id}
                                                      value={answser.id} control={<RadioQuiz/>} label={answser.label}/>


                                </div>


                            ))}
                        </RadioGroup></div>
                        </div>
                            </Slide>

                        <div className="quiz-footer">
                            <div className="quiz-actions">


                        <ButtonCTA style={{width:'100%'}} variant="contained" size="large"
                                         disabled={test.questions[currentQuestion].selected == 0}
                                         onClick={nextQuestion()}>{currentQuestion == test.questions.length - 1 ? "View Result" : "Next"}</ButtonCTA>

                            </div>
                            <div className="quiz-pager">
                                <label>Question {currentQuestion + 1 + "/" + test.questions.length}</label>
                            </div>


                        </div>
                    </animated.div>

                </div>

            </ThemeProvider></div>
    );
}

export default App;
