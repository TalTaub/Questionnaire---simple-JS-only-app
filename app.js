var isRunning = false;
var questionNumber=0;
var questions = [];
var score = 0;
var Q = document.getElementById("question");
var A1 = document.getElementById("button1");
var A2 = document.getElementById("button2");
var A3 = document.getElementById("button3");
var A4 = document.getElementById("button4");
var form = document.getElementById("gameMasterForm");

class question {
    constructor(question,answer1,answer2,answer3,answer4,answerNum){
        this.question = question;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
        this.answer4 = answer4;
        this.answerNum = answerNum;
    }
}

questions[0] = new question("how long is 1km?","10L","30mile","5foot","1000m",4);
questions[1] = new question("to be or?","not so meat","not to be","todaly","too much feet",2);
questions[2] = new question("how many roads?","man i dont know","must a man walk down","help!","leads too heaven?",2);
questions[3] = new question("when life gives you lemons?","eat them","squish them good","lemonade","fish&chips",3);
questions[4] = new question("random question","answer1","answer2","answer3","answer4",3);
questions[5] = new question("random question","answer1","answer2","answer3","answer4",3);
questions[6] = new question("random question","answer1","answer2","answer3","answer4",3);
questions[7] = new question("random question","answer1","answer2","answer3","answer4",3);
questions[8] = new question("random question","answer1","answer2","answer3","answer4",3);
questions[9] = new question("random question","answer1","answer2","answer3","answer4",3);

var nextQuestion = function(){
        if (questionNumber>questions.length) {
            endScreen();
        }
    else{
        Q.innerHTML=questions[questionNumber-1].question;
        A1.innerHTML = questions[questionNumber-1].answer1;
        A2.innerHTML = questions[questionNumber-1].answer2;
        A3.innerHTML = questions[questionNumber-1].answer3;
        A4.innerHTML = questions[questionNumber-1].answer4;
    }
}


function reset(){
    questionNumber=0;
    score=0;
    Q.innerHTML="to begin your test - press \"Start\"";
        A1.innerHTML = "?";
        A2.innerHTML = "?";
        A3.innerHTML = "?";
        A4.innerHTML = "?";
}

function start(){
    if (questionNumber==0) {
        questionNumber++;
        nextQuestion();
    }

    else{
        return;
    }
}

function endScreen(){
    if (questions.length==0) {alert("there are no questions!"); return}
    alert("Test Ended!, you have got "+ score/10+ " questions right and a total of: "+score+"points!");
    reset();
}

function button1Clicked() {
    if (questionNumber==0){return}
    if (questions[questionNumber-1].answerNum==1){
        score+=10;
        questionNumber++;
        alert("YAY! you are Right!");
        nextQuestion();
    }
    else{
        questionNumber++;
        alert("Boo!! you are wrong!");
        nextQuestion(); 
    }
}

function button2Clicked() {
    if (questionNumber==0){return}
    if (questions[questionNumber-1].answerNum==2){
        score+=10;
        questionNumber++;
        alert("YAY! you are Right!");
        nextQuestion();
    }
    else{
        questionNumber++;
        alert("Boo!! you are wrong!");
        nextQuestion(); 
    }
}

function button3Clicked() {
    if (questionNumber==0){return}
    if (questions[questionNumber-1].answerNum==3){
        score+=10;
        questionNumber++;
        alert("YAY! you are Right!");
        nextQuestion();
    }
    else{
        questionNumber++;
        alert("Boo!! you are wrong!");
        nextQuestion(); 
    }
}

function button4Clicked() {
    if (questionNumber==0){return}
    if (questions[questionNumber-1].answerNum==4){
        score+=10;
        questionNumber++;
        alert("YAY! you are Right!");
        nextQuestion();
    }
    else{
        questionNumber++;
        alert("Boo!! you are wrong!");
        nextQuestion(); 
    }
}

function killButton(){
    reset();
    questions=[];
}

function pushQuestion(){
    // will add set\get methods later, this is just for quick utilization.
    let Q = document.getElementById("enterQuestion").value;
    let A1 = document.getElementById("answernumber1").value;
    let A2 = document.getElementById("answernumber2").value;
    let A3 = document.getElementById("answernumber3").value;
    let A4 = document.getElementById("answernumber4").value;
    let RA = document.querySelector('input[name="rightAnswer"]:checked').value;
    console.log(RA);

    newQuestion = new question(Q,A1,A2,A3,A4,RA);
    questions.push(newQuestion);
    console.log(questions);
    alert("there are now: "+questions.length+" questions on your questioner");
}