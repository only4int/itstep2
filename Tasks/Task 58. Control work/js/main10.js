let table = document.querySelector("table");

table.addEventListener("click", function(event){

    let td = event.target;

    if(td.tagName != "TD"){
        return false;
    }

    let count = +document.querySelector("caption b").innerText;

    td.classList.toggle("black");

    if(td.nextElementSibling){
        td.nextElementSibling.classList.toggle("black");
    }
    if(td.previousElementSibling){
        td.previousElementSibling.classList.toggle("black");
    }
    
    let number = td.cellIndex;

    if(td.parentElement.nextElementSibling){
        td.parentElement.nextElementSibling.children[number].classList.toggle("black");
    }
    if(td.parentElement.previousElementSibling){
        td.parentElement.previousElementSibling.children[number].classList.toggle("black");
    }
    
    count++;
    document.querySelector("caption b").innerText = count;

    if(document.querySelectorAll("tbody td:not(.black)").length == 0){
        document.querySelector("tfoot td").innerHTML = "Победа!";
    }

});