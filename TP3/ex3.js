document.body.innerHTML = ""
var t = [];
var val;
var moyenne = 0;

while (true){
    val = prompt('Entre une valeur : ');   
    if(parseInt(val) < 0 ){
        break;
    } 
    moyenne+=parseInt(val);
    t.push(val);
}

console.log('La moyenn est de : ' + moyenne + " / " + t.length + " = " + (moyenne/t.length));
