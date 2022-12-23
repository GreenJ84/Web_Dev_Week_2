function changeName(e) {
    var names = [
        'Jane Doe',
        'Steve Martin',
        'Lightning McQueen',
        'Led Zepplin',
        'Buck Wilde',
        'James Johnson'
];
    var i = Math.round(Math.random()* (names.length-1))
    document.getElementById('name').innerText = names[i];
}


function removeRequest(element, element1){
    element.remove();
    // console.log(element);

    // console.log(element1);
    var req = element1.innerText;
    req--;
    element1.innerText = req;

}


function approveRequest(element, element1, element2){
    element.remove();
    // console.log(element);

    // console.log(element1.innerText);
    var req = element1.innerText;
    req--;
    element1.innerText = req;
    // console.log(req);
    

    // console.log(element2.innerText);
    var connections = element2.innerText;
    connections++;
    element2.innerText = connections;
    // console.log(connections);






}