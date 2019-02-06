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
    let indent = 4;
    for(let child of node.childNodes){
        let str = ' '.repeat(nodeLevel*indent) /*+ 'name='*/ + child.nodeName /*+ ' type=' + child.nodeType*/;
        if(child.nodeType === 3){
            str += "=" + child.nodeValue;
        }
        console.log(str);
        if(child.nodeType === 1){
            printNode(child, nodeLevel+1);
        }
    }
}

let el = document.querySelector("div.article");
printNode(document, 0);
