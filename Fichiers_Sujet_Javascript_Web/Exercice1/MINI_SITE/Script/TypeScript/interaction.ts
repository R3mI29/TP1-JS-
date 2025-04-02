/*
* Fonction qui affiche l'heure courante dans l'élément HTML
* d'identifiant (attribut id) égal à "date"
*/

function displayHour() : void {
    let now = new Date();
    /* now est un objet de type Date et dispose de différentes
     * méthodes permettant de récupérer des informations, par exemple
     * now.getHours(), now.getMinutes()... */


    /*
     * On peut récupérer un objet javascript correspondant à un
     * élément d'une page web en utilisant la méthode
     * document.getElementById et en lui passant en paramètre
     * l'identifiant (attribut id) de l'élément dans la page HTML
     * Ainsi dans la variable dateinput se trouve un objet
     * correspondant à l'élément HTML de la page dont l'attribut id vaut
     * "date" ou null si aucun élément de la page n'a cet identifiant.
     * Ici il s'agit d'un élément <input />.
     */
    let dateinput : HTMLElement | null = document.getElementById("date");

    /*
     * Un objet javascript peut accéder et modifier les attributs
     * d'un élément. Ainsi un élément input possède un attribut
     * value. On peut accéder à l'attribut value de l'objet dateinput
     * en écrivant dateinput.value. Mais, pour cela il faut être sûr que la
     *  variable contient bien un objet de ce type. On utilise l'opérateur
     *  instanceof pour savoir si l'objet est bien du type HTMLInputElement
     *  et s'il est non null
     */

    if (dateinput instanceof HTMLInputElement) {

        dateinput.value = "Il est " + now.getHours() + "h" + " et des brouettes";

        /*
         * Tous les objets javascript qui représentent un élément HTML
         * disposent d'un attribut style qui lui-même possèdent différents
         * attributs permettant de définir le style de l'élément.
         *
         * Ici, on joue sur la bordure de la zone de texte (aucune), la
         * taille de la police de caractères, la couleur du texte et son
         * style.
         */
        dateinput.style.border = "none";
        dateinput.style.fontSize = "2em";
        dateinput.style.color = "maroon";
        dateinput.style.fontStyle = "italic";
    }
}

/*
* Fonction qui modifie la taille de l'élément HTML qui lui est passé
* en paramètre.
*
* Lorsqu'aucune largeur n'était précédemment spécifiée pour l'élément,
* sa largeur devient "50%" (de la taille de l'élément qui le
* contient), lorsqu'une largeur était spécifiée, elle est oubliée.
*/

function setWidth(obj: HTMLElement) : void{

    if (obj.style.width === ""){
        obj.style.width="50%";
    }
    else{
        obj.style.width = "";
    }
}


/*
* Fonction qui attribue la couleur color à la couleur d'écriture de
* l'élément HTML représenté par obj.
*/
function setColor(obj : HTMLElement,color : string): void {
    obj.style.color = color;
}

/*
* Fonction qui attribue la couleur noir à la couleur d'écriture de
* l'élément HTML représenté par obj.
*/
function unsetColor(obj : HTMLElement) : void {
    obj.style.color = "black";
}

/*
* Fonction qui attribue à l'élément d'identifiant "liste" une bordure
* ligne d'épaisseur 2 pixels et de couleur rouge et une largeur de 50%
* la taille de son conteneur.
*/
function highlightList() : void{
    let div : HTMLElement | null = document.getElementById("liste");
    if (div instanceof HTMLElement) {
        div.style.border = "solid 2px red";
        div.style.width = "50%";
    }

}
