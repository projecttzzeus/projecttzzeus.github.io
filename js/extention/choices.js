function search_animal() {
    var parser, xmlDoc;
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(text,"indelfile.xml");
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!xmlDoc[i].innerHTML.toLowerCase().includes(input)) {
            xmlDoc[i].style.display="none";
        }
        else {
            xmlDoc[i].style.display="list-item";                 
        }
    }
}
