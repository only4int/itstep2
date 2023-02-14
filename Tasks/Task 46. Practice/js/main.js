let a = document.querySelector("a");
let link;
if(a){
    link = a.href;
    a.parentElement.innerHTML = a.innerHTML; // или a.outerHTML = a.innerHTML;
}
let div = document.querySelector("div.news__more");
if(div){
    a = document.createElement("a");
    a.href = link;
    a.innerHTML = div.innerHTML;
    div.innerHTML = "";
    div.insertAdjacentElement("afterbegin", a);
    let h4 = document.querySelector("h4");
    if(h4){
        a.title = h4.innerText;
    }
    
}

let p = document.querySelector("p");
if(p){
    p.outerHTML = `<b>${p.innerHTML}</b>`;
}