

const quizdata=[
    {
        question : 'what is the capital of India',
        a:'rome',
        b: 'london',
        c:'kabul',
        d: 'delhi',
        answer:'d'

    },
    {
        question : 'what is the most used programming language',
        a:'Java',
        b: 'JavaScirpt',
        c:'Go',
        d: 'python',
        answer:'a' 
    },
    {
        question : 'What is indian national animal',
        a:'Cow',
        b: 'dog',
        c:'cat',
        d: 'tiger',
        answer:'d'
    },
    {
        question : 'What is indian national game',
        a:'cricket',
        b: 'batminton',
        c:'hockey',
        d: 'football',
        answer:'c'
    },
    {
        question : 'which is the biggest ocean in the World',
        a:'Indian Ocean',
        b: 'Atlantic Ocean',
        c:'Pacific Ocean',
        d: 'none of these',
        answer:'d'
    }
]

const questiontxt=document.getElementById('questiontext');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submit=document.getElementById('submitbutton');



let currentquestion=0;
loadquiz();

function loadquiz(){

    const currentquestiondata=quizdata[currentquestion];
    questiontxt.innerText=currentquestiondata.question ;
    a_text.innerText=currentquestiondata.a;
    b_text.innerText=currentquestiondata.b;
    c_text.innerText=currentquestiondata.c;
    d_text.innerText=currentquestiondata.d;

    
    currentquestion++;

}

