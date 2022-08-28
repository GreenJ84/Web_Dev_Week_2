function exit(element){
    var x = document.getElementById('video');
    console.log(x);

    x.pause(this);
    element.muted = false;
}

function unmute(element){
    element.muted = false;
}

function preview(element){
    var x = document.getElementById('video');
    console.log(x);

    x.play(this);

}

