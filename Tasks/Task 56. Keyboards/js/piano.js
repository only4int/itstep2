document.addEventListener("keydown", function(e){
    let n = +e.key;
    if(n === n){
        document.querySelector(`.keyboard:nth-child(${n+1})`).classList.add("press");
    }
});

document.addEventListener("keyup", function(event){
    let n = +event.key;
    if(!isNaN(n)){ // isNaN(n) тоже самое n !== n
        document.querySelector(`.keyboard:nth-child(${n+1})`).classList.remove("press");
    }
});
