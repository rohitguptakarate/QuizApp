
let questionbox = document.body.querySelector("#questionbox");
let options = document.querySelectorAll("#opt");
let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let answer3 = document.querySelector(".answer3");
let answer4 = document.querySelector(".answer4");
let clickedbtn = document.querySelectorAll("#clickedbtn");
let displayscore = document.querySelector("#displayscore");
let innerbody = document.getElementById('innerbody');




let score = 0;
let AnswerCorrect = 0;
let AnswerWorng = 0;
let clickedQuestion = 1;   //this is for when userclicked on the option then inc++



// Quiz Start here..
const arrMath = [
    {
        
        'question': "Which is smaller: 3.5 or 4.2?",
        a: "3.5",
        b: "2.5 ",
        c: "2.6",
        d: "2.7",
        correct: "0",

    },
    {
        'question': "Which number is closer to 10: 8 or 12?",
        a: "8",
        b: "12",
        c: " They are equally close",
        d: "Cannot be determined",
        'correct': "2",

    },
    {
        'question': "Which is greater: 15 or 12?",
        a: "15",
        b: "12",
        c: "They are equal",
        d: "Cannot be determined",
        'correct': "0",

    },
    {
        'question': "Which is larger: 7/8 or 3/4?",

        a: "7/8",
        b: "3/8",
        c: "They are equal",
        d: " Cannot be determined",
        'correct': "0",

    },
    {
        'question': "Which is greater: 10 or 2 x 5?",

        a: "10",
        b: "5 x 2 ",
        c: "They are equal",
        d: "Cannot be determined",
        'correct': "2",

    },
    {
        'question': "Which is smaller: 1/2 or 0.6 ?",
        a: "1/2",
        b: "0.5",
        c: "They are equal",
        d: "Cannot be determined",
        'correct': "0",

    },
    {
        'question': " Which is larger: 5 x 2 or 12?",


        a: "5 x 2",
        b: "12",
        c: "5",
        d: " 2",
        'correct': "0",

    },
    {
        'question': "Which is smaller: 0.75 or 0.8?",

        a: "0.75",
        b: "75",
        c: "7.5",
        d: "25",
        'correct': "0",

    },
    {
        'question': "Which is greater: 100 or 10 × 10?",
  
        a: "100",
        b: "10 x 10",
        c: "They are equal",
        d: " Cannot be determined",
        'correct': "2",

    },
    {
        'question': "Which is smaller: 25 or 30 - 10?",
 
        a: " 25",
        b: " 8",
        c: " 10 ",
        d: " 12",
        'correct': "0",

    },

]


let total = arrMath.length;
let index = 0;
const loadQuestion = () => {
    if (index == total) {
        return endQuiz();
    }
    let data = arrMath[index];
    // console.log(data);
    questionbox.innerText = `${index + 1}.  ${data.question}`;
    answer1.innerText = data.a;
    answer2.innerText = data.b;
    answer3.innerText = data.c;
    answer4.innerText = data.d;

}
loadQuestion();


// next button clicked 
function quizbutton() {
    // ---->
    index++;  // this is incriment again and again..
    console.log(index);
    loadQuestion();  // here calling again and again when clicked to the btn..

}


// Geting answer -->

options.forEach((opt, inde) => {
    opt.addEventListener("click", () => {
        console.log("checked");
        document.getElementById("attemptQuestion").innerText = clickedQuestion++;  //this is used for print on the Answer Sheet ----------------->
        let data = arrMath[index];
        console.log(inde);

        console.log(data.correct);
        if (inde == data.correct) {
            score++;    // score inc..
            AnswerCorrect++;
            displayscore.innerText = `SCORE :${score}`
            // console.log("yes");
        }
        else {
            AnswerWorng++;
            console.log(AnswerWorng);
            // console.log("no");
        };

        quizbutton();


    });


});
let value = prompt("Again Inter Your Name :")
// console.log(value);


const endQuiz = () => {
    document.getElementById('innerbody').style.display = 'none';
    document.getElementById('demo').style.display = "block"
    document.getElementById('result_name').innerText = value;
    document.getElementById('total_questions').innerText = total;
    // document.getElementById('attampt').innerText=total;
    document.getElementById('CorrectAns').innerText = AnswerCorrect;
    document.getElementById('worngAnss').innerText = AnswerWorng;
    // document.getElementById('perc').innerText=total;


}


// Go to Home Page  Function---------------------->
function GoHome() {
    document.getElementById('unhide').style.display = "block"
    document.getElementById('demo').style.display = "none";

    console.log("clicked")
}