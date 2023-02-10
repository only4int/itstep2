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

let secondElement = document.querySelector("#second-element");
if(secondElement){
    /*let out = "<ul>";
    for(let i = 1; i <= 10; i++){
        out += `<li>Пункт ${i}</li>`;
    }
    out += "</ul>";
    secondElement.insertAdjacentHTML("afterbegin", out);*/

    let ul = document.createElement("ul");
    secondElement.insertAdjacentElement("afterbegin", ul);
    for(let i = 1; i <= 10; i++){
        let li = document.createElement("li");
        li.innerHTML = `Пункт ${i}`;
        ul.insertAdjacentElement("beforeend", li);
    }

    let evenElements = ul.querySelectorAll("li:nth-child(2n)"); // ul.querySelectorAll("li:nth-child(even)");
    if(evenElements.length){
        Array.from(evenElements).forEach(function(item){
            item.style.color = "#f00";
        });
    }

    let oddElements = ul.querySelectorAll("li:nth-child(2n+1)");
    if(oddElements.length){
        Array.from(oddElements).forEach((item) => {
            item.classList.add("odd-element");
        })
    }

    let elements = ul.querySelectorAll("li:nth-child(3n)");
    if(elements.length){
        Array.from(elements).forEach((item) => {
            if(item.classList.contains("odd-element")){
                let styles = getComputedStyle(item);
                let fontSize = parseInt(styles.fontSize, 10);
                item.style.fontSize = `${fontSize*2}px`;
            }
        })
    }
}
let thirdElement = document.querySelector("#third-element");
if(thirdElement){
    let bs = thirdElement.querySelectorAll("b");
    if(bs.length){
        Array.from(bs).forEach((item) => {
            item.outerHTML = `<strong>${item.innerHTML}</strong>`;
        });
    }

    let strongs = thirdElement.querySelectorAll("strong");
    if(strongs.length){
        Array.from(strongs).forEach((item) => {
            item.innerHTML = item.innerText;
        });

        Array.from(strongs).forEach((item) => {
            let words = item.innerText.split(" ");
        
            let newInnerHTML = words.map((word) => {
                return `<span>${word}</span>`
            }).join(" ");

            item.innerHTML = newInnerHTML;
        });
    }
}
let fourthElement = document.querySelector("#fourth-element");
if(fourthElement){
    if(fourthElement.parentElement){
        let divs = fourthElement.parentElement.querySelectorAll("div");
        if(divs.length){
            Array.from(divs).forEach((div) => {
                console.log(div.innerHTML);
            });

            let reverseDivs = [];
            Array.from(divs).forEach((item) => {
                reverseDivs.unshift(item.innerHTML);
            });

            Array.from(divs).forEach((div, index) => {
                div.innerHTML = reverseDivs[index];
            })

            divs[1].remove();
            
            // аналог
            //fourthElement.parentElement.firstElementChild.nextElementSibling.remove();
            let fifthNeighbor = document.createElement("div");
            fifthNeighbor.classList.add("neighbor");
            fifthNeighbor.classList.add("fifth-neighbor");
            fifthNeighbor.innerHTML = "Я пятый сосед";
            divs[0].insertAdjacentElement("afterend", fifthNeighbor); // divs[0] = fourthElement.parentElement.firstElementChild
            fifthNeighbor.style.border = "1px solid #000";
            fifthNeighbor.style.padding = "10px";
            fifthNeighbor.style.backgroundColor = "#ff0";
        }
    }
}

let fifthElement = document.querySelector("#fifth-element");
if(fifthElement){
    fifthElement.insertAdjacentHTML("beforebegin", "<div>1</div><div>2</div>");
    fifthElement.insertAdjacentHTML("afterend", "<div>3</div><div>4</div>");

    let div1 = fifthElement.parentElement.firstElementChild;
    let days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"];

    let out = "<ol>";
    days.forEach((day) => {
        out += `<li>${day}</li>`;
    });
    out += "</ol>";
    div1.insertAdjacentHTML("beforeend", out);

    div1.firstElementChild.lastElementChild.style.color = "#f00";
    div1.firstElementChild.lastElementChild.previousElementSibling.style.color = "#f00";
    //div1.querySelector("ol li:last-child");
    //div1.firstElementChild.children[5], div1.firstElementChild.children[6]

    let div2 = fifthElement.previousElementSibling;

    let span1 = document.createElement("span");
    span1.innerHTML = "Первый span";
    div2.insertAdjacentElement("afterbegin", span1);
    let span2 = document.createElement("span");
    span2.innerHTML = "Второй span";
    div2.insertAdjacentElement("beforeend", span2);

    span1.innerHTML = span1.innerHTML + `(${span1.innerHTML.length})`; 
    span2.innerHTML = span2.innerHTML + `(${span2.innerHTML.length})`; 

    let div3 = fifthElement.nextElementSibling;

    //div3.innerHTML = `<a href="//google.com">${div3.innerHTML}</a>`;

    let a = document.createElement("a");
    a.href = "https://google.com/";
    a.innerHTML = div3.innerHTML;
    div3.innerHTML = "";
    div3.insertAdjacentElement("afterbegin", a);
    a.style.border = "1px dotted #0f0";
    a.style.textDecoration = "underline";

    let div4 = fifthElement.nextElementSibling.nextElementSibling;

    div4.outerHTML = `<article>${div4.innerHTML}</article>`;

    let article = fifthElement.nextElementSibling.nextElementSibling;
    article.classList.add("news", "good-news");
}