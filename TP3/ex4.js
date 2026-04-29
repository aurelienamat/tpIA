document.body.innerHTML = ""
function max(){
    let max = prompt("Entre un nombre :");
    let val;
    for(let i = 0 ; i < 2 ; i++){
        val = prompt("Entre un nombre :");
        if(val > max){
            max = val;
        }
    }

    console.log("Le max est " + max);
}