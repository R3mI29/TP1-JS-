"use strict";
function updateColorButton(x) {
    let a = document.getElementsByTagName("button")
    for(let i = 0;i<a.length;i++)
        a[i].style.color = x;
}
function updateFontsize(o) {
    o.style.fontSize = "16pt";
}
function ereaseText() {
    let a = document.getElementById("res")
    a.value = "";
}
function giveresult(){
    let a = document.getElementById("res")
    a.value = eval(a.value);
}
function addtext(x){
    let a = document.getElementById("res")
    a.value = a.value +x; 
}