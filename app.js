const UserName = document.getElementById('UserName').value;
let clickedpipe = document.getElementById('clickedpipe');
let yourchoices=document.querySelectorAll(".choice");
const Maincontainer =document.querySelector(".Maincontainer");
let DisplayTime =document.getElementById('setTime');



// this is use for name geting ..
 function btn(){
    let name =document.getElementById('UserName').value;
    document.getElementById('result_name').innerText=name;
    console.log(name);
       
}


 // this for every choice is come on by one foreach function ..
yourchoices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        console.log("clicked calling..")
         const userclicked = choice.getAttribute("id");
          console.log("this is id=",userclicked);
        replce(userclicked);
    })
})


const replce =((userclicked)=>{
    //console.log("i am calling under replace=",userclicked);
    if(userclicked== "clickedpipe"){
        DisplayfirstChoice();  // function calling on click btn
      
    }
    else if(userclicked=="CSE"){
        secondchoice();
    }
    else if(userclicked == "Math")
        console.log("yes");
      //  thirdchoice();
})


const secondchoice = () =>{
    document.getElementById('hide').style.display='none';
    document.getElementById('demo').style.display="block"
}



 /// here to start for----------- CSE---------- Quiz--------------------->
let questionbox = document.body.querySelector("#questionbox");
let options = document.querySelectorAll("#opt");
let answer1 = document.querySelector(".answer1");
let answer2 = document.querySelector(".answer2");
let answer3 = document.querySelector(".answer3");
let answer4 = document.querySelector(".answer4");
let clickedbtn = document.querySelectorAll("#clickedbtn");
let displayscore = document.querySelector("#displayscore");
let innerbody =document.getElementById('innerbody');




let score = 0;    //this is for score
let AnswerCorrect = 0;    //this is for correct ans
let AnswerWorng = 0;
let clickedQuestion =1;   //this is for when userclicked on the option then inc++



// Quiz Start here..
const arr = [
    {
        'question': "Which of the following is a primary function of an operating system?",
        a: "Data encryption",
        b: " Web browsing",
        c: "Process management",
        d: "Database design",
        correct: "2",

    },
    {
        'question': "Which data structure uses Last In First Out (LIFO) principle?",
        a: "Queue",
        b: "Stack",
        c: " Array",
        d: "Linked List",
        'correct': "1",

    },
    {
        'question': "What does CPU stand for?",
        a: "Central Processing Unit",
        b: "Central Program Unit",
        c: "Computer Processing Unit",
        d: "Core Processing Unit",
        'correct': "0",

    },
    {
        'question': "In the context of programming, what does 'IDE' stand for?",

        a: "Integrated Development Environment",
        b: "Integrated Design Environment",
        c: "Interactive Development Editor",
        d: " Independent Development Environment",
        'correct': "0",

    },
    {
        'question': "What is the purpose of the 'SQL' language in databases?",
       
        a: "System Query Language",
        b: "Structured Query Language",
        c: "Schematic Query Language",
        d: "Syntax Query Language",
        'correct': "1",

    },
    {
        'question': "Which of the following is not a type of software development methodology?",
       
        a: "Agile",
        b: "Waterfall",
        c: "Scrum",
        d: "Binary",
        'correct': "3",

    },
    {
        'question': "Which network topology connects all devices to a central hub?",
      
        a: "Star",
        b: "Ring",
        c: "Mesh",
        d: "Bus",
        'correct': "0",

    },
    {
        'question': "In object-oriented programming, which concept is used to hide the internal implementation details of a class?",
     
        
        a: "Inheritance",
        b: "Encapsulation",
        c: "Polymorphism",
        d: "Abstraction",
        'correct': "1",

    },
    {
        'question': "What is the primary purpose of an IP address?",
  
        
        a: "To encrypt data",
        b: "To identify devices on a network",
        c: "To execute programs",
        d: "To store data",
        'correct': "1",

    },
    {
        'question': "Which algorithm is commonly used for sorting data?",
   
        a: "Binary Search",
        b: "Merge Sort",
        c: " Dijkstra’s Algorithm",
        d: " Prim’s Algorithm",
        'correct': "1",

    },
  
]

let total = arr.length;
let index = 0;

const loadQuestion = () => {
    displayHeading();
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
loadQuestion();  // automatic question load when click 



// next button clicked 
function quizbutton() {
    // ---->
    index++;              // this is incriment again and again..
    loadQuestion();      // here calling again and again when clicked to the btn..

}

// Geting answer -->
options.forEach((opt, inde) => {
    opt.addEventListener("click", () => {
        document.getElementById("attemptQuestion").innerText=clickedQuestion++;  //this is used for print on the Answer Sheet ----------------->
        let data = arr[index];
        if (inde == data.correct) {
            score++;    // score inc..
            AnswerCorrect++;
            displayscore.innerText = `SCORE :${score}`
            calculate();
        }
        else {
            AnswerWorng++;
            console.log(AnswerWorng);
            // console.log("no");
        };
        quizbutton();
    });
   
});

// this is for quize end and then result show 
const endQuiz= ()=>{
  
    document.getElementById('quiz1').style.display='none'; 
    document.getElementById('demo').style.display='none';

    document.getElementById('showresult').style.display="block"
  //Quiz1
    document.querySelector('.Quiz1Ans').innerText=AnswerCorrect;
    document.querySelector('.Quiz1Worng').innerText=AnswerWorng;
    document.getElementById('total_questions').innerText=AllQue;
  //Quiz2
    document.getElementById('total_questions').innerText=total;
    document.getElementById('CorrectAns').innerText=AnswerCorrect ;
    document.getElementById('worngAnss').innerText=AnswerWorng;
}

function displayHeading(){
    document.getElementById('HideHeading').innerText="";   
}




// Go to Home Page  Function
function GoHome(){
     document.getElementById('hide').style.display="block"
     document.getElementById('showresult').style.display="none";
    console.log("clicked")
}


// calculate
const calculate =()=>{
   let calcToatal =Math.floor(AnswerCorrect/10 * 100);
   console.log("total =",calcToatal);
   document.getElementById('Percenrage').innerText=calcToatal;
 

}



//............................................Quiz1 Here Start..................................

function DisplayfirstChoice(){
    document.getElementById('hide').style.display='none';
    document.getElementById('quiz1').style.display='block';
}

let que1 = document.querySelector(".que1");
let ans1 = document.querySelector('.ans1');
let ans2 = document.querySelector('.ans2');
let ans3 = document.querySelector('.ans3');
let ans4 = document.querySelector('.ans4');
let Quiz1Opt = document.querySelectorAll('#quiz1Opt');



// Quiz1 All Questions
const Quiz1Question = [
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
let AllQue = Quiz1Question.length;


let inx =0;
const loadQuiz1 = () => {
    displayHeading();
    if(inx==AllQue){
        return endQuiz();    // got to end Quiz
    }
    let data1 = Quiz1Question[inx];
     console.log(data1);
      que1.innerText = `${inx + 1}.  ${data1.question}`;
      ans1.innerText = data1.a;
      ans2.innerText = data1.b;
      ans3.innerText = data1.c;
      ans4.innerText = data1.d;

}
loadQuiz1();


//clicked Options
Quiz1Opt.forEach((opt , indx) => {
    opt.addEventListener("click", () =>{
        let data1 = Quiz1Question[inx];
        if(indx == data1.correct){
            AnswerCorrect++;
            console.log("Right");
        }
        else{
            AnswerWorng++;
            console.log("Worng");
        }

       quizbtn(); // Call when clicked options. 

    })

})


// next button clicked 
function quizbtn() {
    inx++;              // this is incriment again and again..
    console.log(index);
    loadQuiz1();      // here calling again and again when clicked to the btn..

}









