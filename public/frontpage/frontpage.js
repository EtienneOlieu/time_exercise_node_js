fetch("/api/time")
.then(response => response.json())
.then(result => {
    isItArkhipovDay(result.data);
    countDowntoArkhipovDay(result.data);
})

function isItArkhipovDay(arkhipovData){
    const arkhipovDate = new Date (arkhipovData);
    const today = new Date();

    const answerDiv = document.getElementById("answer-div");
    const answerH2 = document.createElement("h2");
    
    if ((today.getMonth() === arkhipovDate.getMonth()) && (today.getDate() === arkhipovDate.getDate())){
       answerH2.innerText = "YES! Today is Vasily Arkhipov day.";
    }else {
        answerH2.innerText = "NO!";
    };
    answerDiv.appendChild(answerH2)
}

function countDowntoArkhipovDay(arkhipovData){
    const arkhipovDate = new Date(arkhipovData);
    const today = new Date();
    const now = today.getTime();
    let targetDate = new Date("1900-01-01");

    targetDate.setDate(arkhipovDate.getDate());
    targetDate.setMonth(arkhipovDate.getMonth());
    targetDate.setFullYear(today.getFullYear());
    if (targetDate.getTime() < now){
        targetDate.setFullYear(today.getFullYear() + 1);
    }
    

  
    const countdownDiv = document.getElementById("countdown-div");
    const countdownH2 = document.createElement("h2");
    countdownDiv.appendChild(countdownH2);

const timeToUpdate = setInterval(()=> {

    const timeLeft = targetDate.getTime() - new Date().getTime();
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    countdownH2.innerText = `${days} d : ${hours} h : ${minutes} m : ${seconds} s`


}, 1000); 
timeToUpdate
}