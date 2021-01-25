function enter(abc){
    var x = document.getElementById("search");
    x.value += abc

}

function result(){
    var y = document.getElementById("search");
    y.value = eval(y.value);
}

function sqr(){
    var a = document.getElementById("search");
    a.value = a.value*a.value;
}

function cube(){
    var b = document.getElementById("search");
    b.value = b.value*b.value*b.value;
}

function dl8(){
    var c = document.getElementById("search").value;
    c =c.substr(0,c.length-1);
}



function clar(){
    var z = document.getElementById("search");
    z.value = "";
}

