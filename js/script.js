const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'Java',
        'correct': 'a'
    },
    {
        'que': 'Who is the Developer of C Language?',
        'a': 'Tejas',
        'b': 'Robrt',
        'c': 'Dennis Ritchie',
        'd': 'Jack',
        'correct': 'c'
    },
    {
        'que': 'Who is the Devoloper of JAVA?',
        'a': 'FZ',
        'b': 'James Gosling',
        'c': 'Ravi',
        'd': 'Abhijit',
        'correct': 'b'
    }
]



let index=0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox");
const optioninputs = document.querySelectorAll(".options");

const loadQuestion = ()=>{
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
    quesBox.innerText = `Q ${index+1}. ${data.que}`;
    optioninputs[0].nextElementSibling.innerText = data.a;
    optioninputs[1].nextElementSibling.innerText = data.b;
    optioninputs[2].nextElementSibling.innerText = data.c;
    optioninputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () =>{
    const data = questions[index]
    const ans = getanswer();
    if(ans===data.correct){
        right++;
    }else{
        wrong++; 
    }
    index++;
    loadQuestion();
    return;
}

const getanswer = () =>{
    let answer;
    optioninputs.forEach(
        (input) =>{
           if(input.checked) {
            answer = input.value;
           }
        }
    )
    return answer;
}


const reset = () =>{
    optioninputs.forEach(
        (input) =>{
            input.checked = false;
        }
    )
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML =`
    <h3>Thanks you for playing the quiz</h3>
    <h2>${right}/${total} are correct</h2>`
}

loadQuestion();


