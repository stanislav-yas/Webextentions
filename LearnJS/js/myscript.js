let country = {

    name: "Швейцария",
    languages: ["немецкий", "французский", "итальянский"],
    capital:{

        name: "Берн",
        population: 126598
    },
    cities: [
        { name: "Цюрих", population: 378884},
        { name: "Женева", population: 188634},
        { name: "Базель", population: 164937}
    ],
    display: function () {
        // вывод всех элементов из country.languages
        document.write("<h2>Официальные языки Швейцарии</h2>");
        for(let i in this.languages)
            document.write(this.languages[i] + "<br/>");

// вывод всех элементов из country.cities
        document.write("<h2>Города Швейцарии</h2>");
        for(let i=0; i < this.cities.length; i++)
            document.write("в городе " + this.cities[i].name + " проживает " + this.cities[i].population + " человек <br/>");
    }
};

function printNode (node, nodeLevel){
    let indent = 3;
    let str = ' '.repeat(nodeLevel*indent);
    if(node.nodeType === 2) {
        str += "atr: ";
    }
    str += node.nodeName;
    if(node.nodeValue !== null){
        str += "=" + node.nodeValue;
    }
    console.log(str);
    if(node.hasAttributes){
        for (let attr of node.attributes) {
            printNode(attr, nodeLevel+1);
        }
    }
    if(node.hasChildNodes()){
        for(let child of node.childNodes){
            printNode(child, nodeLevel+1);
        }
    }
}

var clicks = 0;
function handlerOne(e){

    alert(e.type);
}
function handlerTwo(e){

    clicks++;
    var newNode = document.createElement("p");
    newNode.textContent = "произошло нажатие " + clicks;
    document.body.appendChild(newNode);
}
var rect = document.getElementById("rect");
// прикрепляем первый обработчик
rect.addEventListener("click", handlerOne);
// прикрепляем второй обработчик
rect.addEventListener("click", handlerTwo);