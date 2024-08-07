
let questionbox = document.body.querySelector("#questionbox");
let options = document.querySelectorAll("#opt");
let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let answer3 = document.querySelector(".answer3");
let answer4 = document.querySelector(".answer4");
let clickedbtn = document.querySelectorAll("#clickedbtn");
let displayscore = document.querySelector("#displayscore");
let innerbody =document.getElementById('innerbody');




let score = 0;
let AnswerCorrect = 0;
let AnswerWorng = 0;
let clickedQuestion =1;   //this is for when userclicked on the option then inc++



// Quiz Start here..
const arr = [
    {
        'question': "Pipe A can fill a tank in 4 hours, while Pipe B can fill the same tank in 6 hours. If both pipes are opened simultaneously, how long will they take to fill the tank together?",
        a: "2.4 hours",
        b: "2.5 hours",
        c: "2.6 hours",
        d: "2.7 hours",
        correct: "0",

    },
    {
        'question': "Pipe X can fill a tank in 8 hours, and Pipe Y can fill the same tank in 12 hours. If Pipe X is opened for 2 hours and then Pipe Y is opened, how long will it take to fill the tank completely?",
        a: "3.4 hours",
        b: "4 hours",
        c: "6 hours",
        d: "2 hours",
        'correct': "1",

    },
    {
        'question': "A cistern can be filled by two pipes, A and B, in 10 hours and 15 hours respectively. If both pipes are open together, how long will it take to fill the cistern?",
        a: "5.5 hours",
        b: "6 hours",
        c: "6.5 hours",
        d: "7 hours",
        'correct': "1",

    },
    {
        'question': "A cistern can be filled by three pipes, A, B, and C, in 6 hours, 8 hours, and 12 hours respectively. If all three pipes are open together, how long will it take to fill the cistern?",

        a: "3 hours",
        b: "4.5 hours",
        c: "4 hours",
        d: "5 hours",
        'correct': "2",

    },
    {
        'question': "A cistern is filled by two pipes, X and Y. Pipe X alone can fill the cistern in 20 hours and pipe Y alone can fill it in 30 hours. If both pipes are open together, how long will it take to fill the cistern?",
    
        a: "10 hours",
        b: "12 hours",
        c: "15 hours",
        d: "18 hours",
        'correct': "0",

    },
    {
        'question': "A cistern can be emptied by pipe M in 8 hours and by pipe N in 12 hours. If both pipes are open together, how long will it take to empty the cistern?",
      
        a: "4.8 hours",
        b: "5.5 hours",
        c: "6 hours",
        d: "6.5 hours",
        'correct': "0",

    },
    {
        'question': "If pipe A can fill a cistern in 8 hours and pipe B can fill it in 12 hours, and if pipe B is twice as fast as pipe A, how long will it take for the cistern to be filled if both pipes are working together?",
      
        a: "4 hours",
        b: "4.8 hours",
        c: "6 hours",
        d: "5 hours",
        'correct': "1",

    },
    {
        'question': "A cistern has two pipes, A and B. Pipe A can fill the cistern in 15 hours and pipe B can empty it in 20 hours. If both pipes are open together, how long will it take to fill the cistern?",
      
        a: "10 hours",
        b: "12 hours",
        c: "15 hours",
        d: "18 hours",
        'correct': "3",

    },
    {
        'question': "A cistern is filled by three pipes, A, B, and C. Pipe A can fill the cistern in 4 hours, pipe B in 6 hours, and pipe C in 8 hours. If all three pipes are open together for 2 hours, how much of the cistern is filled?",

      
        a: "1/4",
        b: "1/3",
        c: "1/2",
        d: "2/3",
        'correct': "1",

    },
    {
        'question': "A cistern can be filled by two pipes, A and B, in 12 hours and 18 hours respectively. If pipe A is open for 4 hours and then pipe B is opened, how long will it take for pipe B alone to fill the remaining part of the cistern?",
  
        a: " 6 hours",
        b: " 8 hours",
        c: " 10 hours",
        d: " 12 hours",
        'correct': "0",

    },
  
]


let total = arr.length;
let index = 0;
const loadQuestion = () => {
    if(index==total){
        return endQuiz();
    }
    let data = arr[index];
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
        document.getElementById("attemptQuestion").innerText=clickedQuestion++;  //this is used for print on the Answer Sheet ----------------->
        let data = arr[index];
        console.log(inde);

        console.log(data.correct);
        if (inde == data.correct) {
            score++;    // score inc..
            AnswerCorrect++;
            displayscore.innerText = `SCORE :${score}`;
            calculate();
            

        }
        else {
            AnswerWorng++;
            console.log(AnswerWorng);
          
        };
       
        quizbutton();
        

    });
   

});
 let value=prompt("Again Inter Your Name :")
// console.log(value);


const endQuiz= ()=>{
    document.getElementById('innerbody').style.display='none';
    document.getElementById('demo').style.display="block"
    document.getElementById('result_name').innerText=value;
    document.getElementById('total_questions').innerText=total;
    // document.getElementById('attampt').innerText=total;
    document.getElementById('CorrectAns').innerText=AnswerCorrect;
    document.getElementById('worngAnss').innerText=AnswerWorng;
    // document.getElementById('perc').innerText=total;


}


// Go to Home Page  Function---------------------->
function GoHome(){
    document.getElementById('unhide').style.display="block"
    document.getElementById('demo').style.display="none";

   console.log("clicked")
}


// calculate  ------------------>
const calculate =()=>{
   
    let calcToatal =Math.floor(AnswerCorrect/10 * 100);
    console.log("total =",calcToatal);
    document.getElementById('Percenrage').innerText=calcToatal;
  
 
 }