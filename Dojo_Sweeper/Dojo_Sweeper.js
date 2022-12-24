var theDojo = [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
                
var dojoDiv = document.querySelector("#the-dojo");
    
function update() {
    for (let i = 0; i < 20; i++) {
        let x = Math.round(Math.random() * (theDojo.length - 1))
        let y = Math.round(Math.random() * (theDojo[0].length - 1))
        let n = Math.round(Math.random() * 5)
        
        if (theDojo[x][y] != 0) {
            i--
        } else {
            theDojo[x][y] = n
        }
    }
    console.log(theDojo)
}

// Creates the rows of buttons for this game
function render() {
    var result = "";
    for(var i=0; i<theDojo.length; i++) {
        for(var j=0; j<theDojo[i].length; j++) {
        result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    return result;
}
    

function howMany(i, j, element) {
    if (theDojo[i][j] != 0) {
        element.innerHTML = "<p class='red'></p>"
        alert("Game Over");
        return;
    }
    var ninjas = 0;
        if (i >= 1 && j >=1){
            ninjas += theDojo[i-1][j-1];}

        if (i >= 1){
            ninjas += theDojo[i-1][j];}
        
        if (i >=1 && j <=8){
            ninjas += theDojo[i-1][j+1];}
            
        if (j >= 1){
            ninjas += theDojo[i][j-1];}
            
        if (j <= 8){
            ninjas += theDojo[i][j+1];}

        if (i <= 8 && j >=1){
            ninjas += theDojo[i+1][j-1];}

        if (i <=8){
            ninjas += theDojo[i+1][j];}

        if (i <=8 && j <=8){
            ninjas += theDojo[i+1][j+1];}
        element.innerText = ninjas;

}

function restart() { location.reload(); }


update();
dojoDiv.innerHTML = render();

