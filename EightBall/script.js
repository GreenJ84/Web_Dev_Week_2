var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function getAnswer() {
    var input = document.getElementById('question').value;
    if(input === ""){
    document.getElementById("answer").innerText = "Please Ask a Question";
    }
    else{
        document.getElementById('ball').src= "ball.gif";
        var i = Math.floor(Math.random() * lifesAnswers.length);
        replace(lifesAnswers[i]);
        return;
    }
    
}

function replace(JLG) {
    setTimeout(function(){
    document.getElementById('ball').src='ballStill.jpg';
    document.getElementById("answer").innerText = JLG;
    },1500);
    return;
}