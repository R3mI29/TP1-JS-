"use strict";
class Cellarray extends Array {
    constructor(lines, columns) {
        super(lines * columns);
        this.lines = lines;
        this.columns = columns;
    }
}
function buildTable(lines, columns) {
    let oldtable = document.getElementById("autotable");
    if (oldtable != null && oldtable.parentNode != null) {
        oldtable.parentNode.removeChild(oldtable);
    }
    window.td = new Cellarray(lines, columns);
    window.td.lines = lines;
    window.td.columns = columns;
    let table = document.createElement("table");
    table.id = "autotable";
    document.body.appendChild(table);
    table.style.borderCollapse = "collapse";
    for (let l = 0; l < lines; l++) {
        let tr = document.createElement("tr");
        tr.style.width = "100%";
        for (let c = 0; c < columns; c++) {
            window.td[l * columns + c] = document.createElement("td");
            window.td[l * columns + c].style.border = "solid 2px black";
            window.td[l * columns + c].style.width = "30px";
            window.td[l * columns + c].style.height = "60px";
            tr.appendChild(window.td[l * columns + c]);
        }
        table.appendChild(tr);
    }
}
function fillTable() {
    for (let i = 1; i <= window.td.lines; i++) {
        for (let j = 1; j <= window.td.columns; j++) {
            setElementValue(i, j, "(" + i + "," + j + ")");
        }
    }
}
function setElementValue(line, col, val) {
    let currentNode = window.td[(line - 1) * window.td.columns + (col - 1)];
    // on enlève d'abord ce qui était éventuellement dans la case
    while (currentNode.hasChildNodes()) {
        let child = currentNode.firstChild;
        if (child != null) {
            currentNode.removeChild(child);
        }
    }
    // on ajoute la nouvelle valeur
    let newnode = document.createTextNode(val.toString() + "");
    currentNode.appendChild(newnode);
}
function getElement(line, col) {
    return window.td[(line - 1) * window.td.columns + (col - 1)];
}
function getElementValue(line, col) {
    let elm = window.td[(line - 1) * window.td.columns + (col - 1)].firstChild;
    let v = null;
    if (elm != null) {
        v = elm.nodeValue;
    }
    return v;
}
function getNumberOfLines() {
    return window.td.lines;
}
function getNumberOfColumns() {
    return window.td.columns;
}
