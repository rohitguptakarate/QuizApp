const UserName = document.getElementById('UserName').value;
let clickedpipe = document.getElementById('clickedpipe');
let yourchoices=document.querySelectorAll(".choice");
const Maincontainer =document.querySelector(".Maincontainer");
let DisplayTime =document.getElementById('setTime');
// console.log(DisplayTime);


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
        firstchoice();   // function calling on click btn
      
    }
    else if(userclicked=="CSE"){
        secondchoice();
    }
    else if(userclicked == "Math")
        console.log("yes");
    
        thirdchoice();
})


        // this is for first choice 
const firstchoice =(()=>{
    window.location.assign("http://127.0.0.1:5500/Quiz.html");
    // document.querySelector(".Maincontainer").innerHTML="<h1>Pipes and Cisterns</h1>"

})


const secondchoice = () =>{
    document.getElementById('hide').style.display='none';
    document.getElementById('demo').style.display="block"
   
    

}
const thirdchoice= () =>{
   // window.location.assign("http://127.0.0.1:5502/MathQuiz.html");

}




// here quiz start  -------------------------------------------------------------------------------------->
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
// let timer = 30;
// let timeinterval;
// timeinterval = setInterval(updateTimer, 1000);






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
loadQuestion();  // automatic question load when click ---------------->


// next button clicked 
function quizbutton() {
    // ---->
    index++;              // this is incriment again and again..
    console.log(index);
    loadQuestion();      // here calling again and again when clicked to the btn..

}


// Geting answer -->

options.forEach((opt, inde) => {
    
    opt.addEventListener("click", () => {
        console.log("checked");
        document.getElementById("attemptQuestion").innerText=clickedQuestion++;  //this is used for print on the Answer Sheet ----------------->
        let data = arr[index];
        //console.log(inde);
        //console.log(data.correct);


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

   

// this is for quize end and then result show  --------------------------------------------------->

const endQuiz= ()=>{
   
    document.getElementById('demo').style.display='none';
   document.getElementById('showresult').style.display="block"
    
     document.getElementById('total_questions').innerText=total;
   
     document.getElementById('CorrectAns').innerText=AnswerCorrect ;
    document.getElementById('worngAnss').innerText=AnswerWorng;
   


}

function displayHeading(){
    document.getElementById('HideHeading').innerText="";
    
    
}




// Go to Home Page  Function---------------------->
function GoHome(){
     document.getElementById('hide').style.display="block"
     document.getElementById('showresult').style.display="none";

    console.log("clicked")
}


// calculate  ------------------>
const calculate =()=>{
   
   let calcToatal =Math.floor(AnswerCorrect/10 * 100);
   console.log("total =",calcToatal);
   document.getElementById('Percenrage').innerText=calcToatal;
 

}


// function updateTimer() {
//     if (timer > 0) {
//         timer--;
//         DisplayTime.textContent =  timer + 's';
//         console.log('timeinterval', timeinterval); 
//     }
// }









