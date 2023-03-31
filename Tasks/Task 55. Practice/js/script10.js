document.querySelector("input").onkeyup = function(event){

    let str = this.value;

    let text = document.querySelector("p").textContent; // текстовое содержимое без тега

    let newText = text.replaceAll(str, `<span>${str}</span>`);

    document.querySelector("p").innerHTML = newText;
    
}