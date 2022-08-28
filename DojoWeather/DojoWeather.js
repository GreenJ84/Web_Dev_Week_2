function acceptTerms(){
    var element = document.getElementById('cookie');
    console.log(element);
    element.remove();
}

function linkCity(){
    alert("Loading Weather Report.....")
}

function changeMetric(element){
    if (element.value == "celsius"){

        var high1= document.querySelector("#high1");
        high1.innerText= (Math.round(((high1.innerText - 32)* .5556)*10))/10;

        var low1= document.querySelector("#low1");
        low1.innerText= (Math.round(((low1.innerText - 32)* .5556)*10))/10;



        var high2= document.querySelector("#high2");
        high2.innerText= (Math.round(((high2.innerText - 32)* .5556)*10))/10;

        var low2= document.querySelector("#low2");
        low2.innerText= (Math.round(((low2.innerText - 32)* .5556)*10))/10;



        var high3= document.querySelector("#high3");
        high3.innerText= (Math.round(((high3.innerText - 32)* .5556)*10))/10;

        var low3= document.querySelector("#low3");
        low3.innerText= (Math.round(((low3.innerText - 32)* .5556)*10))/10;



        var high4= document.querySelector("#high4");
        high4.innerText= (Math.round(((high4.innerText - 32)* .5556)*10))/10;

        var low4= document.querySelector("#low4");
        low4.innerText= (Math.round(((low4.innerText - 32)* .5556)*10))/10;
        

    }else{
        var high1= document.querySelector("#high1");
        high1.innerText= (Math.round(((high1.innerText * 1.8)+32)*10))/10;

        var low1= document.querySelector("#low1");
        low1.innerText= (Math.round(((low1.innerText * 1.8)+32)*10))/10;



        var high2= document.querySelector("#high2");
        high2.innerText= (Math.round(((high2.innerText * 1.8)+32)*10))/10;

        var low2= document.querySelector("#low2");
        low2.innerText= (Math.round(((low2.innerText * 1.8)+32)*10))/10;



        var high3= document.querySelector("#high3");
        high3.innerText= (Math.round(((high3.innerText * 1.8)+32)*10))/10;

        var low3= document.querySelector("#low3");
        low3.innerText= (Math.round(((low3.innerText * 1.8)+32)*10))/10;



        var high4= document.querySelector("#high4");
        high4.innerText= (Math.round(((high4.innerText * 1.8)+32)*10))/10;

        var low4= document.querySelector("#low4");
        low4.innerText= (Math.round(((low4.innerText * 1.8)+32)*10))/10;
    }
}