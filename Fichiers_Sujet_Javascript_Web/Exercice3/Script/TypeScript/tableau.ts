class Cellarray extends Array<HTMLTableCellElement> {
    lines : number;
    columns : number;

    constructor (lines: number, columns : number) {
        super(lines*columns);
        this. lines = lines;
        this.columns = columns;
    }
}

interface Window {
    td : Cellarray;
}

function buildTable(lines : number,columns : number) : void {
    let oldtable : HTMLElement|null = document.getElementById("autotable");
    if (oldtable != null && oldtable.parentNode != null){
        oldtable.parentNode.removeChild(oldtable);
    }

    window.td = new Cellarray(lines,columns);
    window.td.lines = lines;
    window.td.columns = columns;
    let table : HTMLTableElement = document.createElement("table");
    table.id="autotable";

    document.body.appendChild(table);

    table.style.borderCollapse="collapse";

    for (let l : number = 0 ; l < lines ; l++){
        let tr:HTMLTableRowElement = document.createElement("tr");
        tr.style.width="100%"
        for (let c : number = 0 ; c < columns ; c++){
            window.td[l*columns+c] = document.createElement("td");
            window.td[l*columns+c].style.border="solid 2px black";
            window.td[l*columns+c].style.width = "30px";
            window.td[l*columns+c].style.height="60px";

            tr.appendChild(window.td[l*columns+c]);
        }
        table.appendChild(tr);
    }
}

function fillTable() : void{
    for (let i : number = 1 ; i <= window.td.lines ; i++){
        for (let j = 1 ; j <= window.td.columns ; j++){
            setElementValue(i,j,"("+i+","+j+")");
        }
    }
}

function setElementValue(line : number,col:number, val : string){
    let currentNode : HTMLTableCellElement = window.td[(line-1) * window.td.columns + (col-1)];
    // on enlève d'abord ce qui était éventuellement dans la case
    while( currentNode.hasChildNodes()){
        let child : ChildNode | null = currentNode.firstChild;
        if (child != null){
            currentNode.removeChild(child);
        }

    }

    // on ajoute la nouvelle valeur
    let newnode : Text = document.createTextNode(val.toString()+"");
    currentNode.appendChild(newnode);

}

function getElement(line : number,col: number): HTMLTableCellElement {
    return window.td[(line-1) * window.td.columns + (col-1)];
}

function getElementValue(line : number,col : number) : string|null{
    let elm : ChildNode|null = window.td[(line-1) * window.td.columns + (col-1)].firstChild;
    let v : string|null = null;
    if (elm != null){
        v = elm.nodeValue;
    }
    return v;
}

function getNumberOfLines(){
    return window.td.lines;
}

function getNumberOfColumns(){
    return window.td.columns;
}
