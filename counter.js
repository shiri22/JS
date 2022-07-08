
let counter=0;
function increment(){
    counter=counter+1;
    document.getElementById("demo").innerHTML=counter;

}
function decrement(){
    counter=counter-1;
    document.getElementById("demo").innerHTML=counter;
}

function reset(){
    counter=0;
    document.getElementById("demo").innerHTML=counter;
}
