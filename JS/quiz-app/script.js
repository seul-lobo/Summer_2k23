const quizData =[
    {
        question:"Which planet is known as the Red Planet?",
        a:'Venus',
        b:'Mars',
        c:'Jupiter',
        d:'Saturn',
        correct:'b'
    },
    {
        question:"Who painted the famous artwork Mona Lisa?",
        a:'Pablo Picasso',
        b:'Vincent van Gogh',
        c:'Leonardo da Vinci',
        d:'Michelangelo',
        correct:'c'
    },
    {
        question:"What is the chemical symbol for gold?",
        a:'Ag',
        b:'Au',
        c:'Pt',
        d:'Hg',
        correct:'b'
    },
    {
        question:"Which country is home to the Taj Mahal?",
        a:'India',
        b:'China',
        c:'Egypt',
        d:'Mexico',
        correct:'a'
    },
    {
        question:"Which programming language is used to build web pages?",
        a:'Python',
        b:'HTML',
        c:'Java',
        d:'C++',
        correct:'b'
    }
]

const questionEl=document.getElementById('question');
const answerEl=document.querySelectorAll(".answer");
const quizEl=document.getElementById('quiz');

const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById('submit');

let currentQuiz=0;
let score=0;

loadQuiz();

function loadQuiz(){
    deSelect(); 
    let currentQuizData=quizData[currentQuiz];

    questionEl.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
    
    
}

function getSelected(){
    let answer=undefined;

    answerEl.forEach((answerEl) => {
        if(answerEl.checked){
            answer=answerEl.id;
        }
    });

    return answer;
}

function deSelect(){
    answerEl.forEach((answerEl) => {
        answerEl.checked=false;
    })
}

submitBtn.addEventListener('click',() => {
    //check to see answer
    const answer=getSelected();

    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz<quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML=`<h2>You answered ${score} questions correctly out of ${quizData.length} questions. </h2>
            <button onclick="location.reload()">Reload<button/>`;
            alert("Quiz Finished!");
        }
    }
    
    
})

