const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()
function loadQuiz(){
    let currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    resetAns();

}  

function selected(){
    let ans = "";
    answerEls.forEach(answer => {
        if(answer.checked){
        //check the console the answer is stored in 'id' key of the nodelist console.log(answerEls);    
            ans = answer.id; 
        }
    });
    return ans;
}


//currently the option selected for one slides keeps there for the next slide also so making this new resetAns function to clear the selected response from the previous slide before the next slide is loaded

function resetAns(){
    answerEls.forEach((answer) => {
        if(answer.checked){
            answer.checked = false;
        }
    })
}

submitBtn.addEventListener('click', () => {
    let answer = selected();
    if(answer === quizData[currentQuiz].correct){
        score++;
    }

    currentQuiz++;

    if(currentQuiz < quizData.length){
        loadQuiz()
    }else{
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>
    `;
    }
})
