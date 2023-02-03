//let neighbors = document.querySelectorAll(".first-section .neighbor");

let firstElement = document.querySelector("#first-element");
let neighbors = firstElement.parentElement.querySelectorAll(".neighbor");
if(neighbors.length){ // количество элементов, проверить наличие через длину
    //Array.from(neighbors)  единоразовое преобразование, оно не меняет сам список на массив
    // let arrayNeighbors = Array.from(neighbors);
    Array.from(neighbors).forEach(function(element){
        element.innerHTML = "Я хороший сосед";
    });

    Array.from(neighbors).forEach(function(element, index){
        element.innerHTML = `Я хороший сосед №${index+1}`;
    });

    Array.from(neighbors).forEach(function(element){
        element.innerHTML = `<span>${element.innerHTML}</span>`;
    });

    Array.from(neighbors).forEach(function(element){
        element.innerHTML = `<b>${element.innerText}</b>`;
    });
}
let lastNeighbor = firstElement.parentElement.querySelector(".fourth-neighbor");
if(lastNeighbor){
    if(lastNeighbor.firstElementChild){
        lastNeighbor.firstElementChild.innerHTML = "Я последний хороший сосед";
    }
}