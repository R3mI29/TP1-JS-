function updateColorButton(x:string) : void{
    let a = document.getElementsByTagName("button")
    for(let i = 0;i<a.length;i++)
        a[i].style.color = x;
}


function updateFontsize(o : HTMLElement) : void{
    o.style.fontSize = "16pt";
}