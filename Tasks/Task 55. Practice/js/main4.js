let input = document.querySelector("input");

input.addEventListener("keyup", function(event){ //change

    let str = this.value; // this = input

    let numbers = str.split(" ");

    let sum = numbers.reduce(function(sum, item){
        return sum + (+item);
    }, 0);

    document.querySelector(".result").innerHTML = sum;
})