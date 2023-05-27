var score,curr;
let my_ans;
const questions=[
    {
        question:"question 1",
        answers:[
            {text:"option 1", correct:"false"},
            {text:"option 2", correct:"false"},
            {text:"option 3", correct:"false"},
            {text:"option 4", correct:"true"}
        ]
    },

    {
        question:"question 2",
        answers:[
            {text:"new option 1", correct:"false"},
            {text:"new option 2", correct:"false"},
            {text:"new option 3", correct:"false"},
            {text:"new option 4", correct:"true"}
        ]
    },

    {
        question:"question 3",
        answers:[
            {text:"option 1", correct:"false"},
            {text:"option 2", correct:"false"},
            {text:"option 3", correct:"false"},
            {text:"option 4", correct:"true"}
        ]
    },

    {
        question:"question 4",
        answers:[
            {text:"option 1", correct:"false"},
            {text:"option 2", correct:"false"},
            {text:"option 3", correct:"false"},
            {text:"option 4", correct:"true"}
        ]
    },

    {
        question:"question 5",
        answers:[
            {text:"option 1", correct:"false"},
            {text:"option 2", correct:"false"},
            {text:"option 3", correct:"false"},
            {text:"option 4", correct:"true"}
        ]
    }
    
];


const quesEle=document.getElementById("ques");
const optEle=document.getElementById("opt");
const next=document.getElementById("next");
const submit=document.getElementById("submit");
const con1=document.getElementById("container-box");
const con2=document.getElementById("container-box2");

submit.addEventListener("click",result);

next.addEventListener("click",()=>{
    if(my_ans=="true") score++;
    console.log(score);
    curr++;
    // check end
    if(curr==questions.length){
        result();
    }
    else showQuetion(curr);
});

function showQuetion(curr){

    resetState();
    let curr_que=questions[curr];
    quesEle.innerHTML=(curr+1) + " " + curr_que.question;
    curr_que.answers.forEach(ans=>{

        const btn=document.createElement("button");
        btn.innerText=ans.text;
        btn.classList.add("option");
        btn.addEventListener("click",()=>{
            my_ans=ans.correct;
        }); 
        optEle.append(btn);

    });
}

function result(){
    con1.style.display="none";
    con2.style.display="flex";

}

function startQuiz(){
    score=0;curr=0;
    showQuetion(curr);
    
}

function resetState(){
    while(optEle.firstChild){
        optEle.removeChild(optEle.firstChild);
    }
    my_ans=false;
}


startQuiz();