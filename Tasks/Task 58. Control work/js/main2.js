function printWithDelay(a){
    let index = 0;

    let timer = setInterval(function(){
        console.log(index);
        index++;
        if(index == a.length){
            clearInterval(timer);
        }
    }, 1000);

    console.log("Hi");
}

function printWithDelay2(a){

    for(let i = 0; i < a.length; i++){
        setTimeout(function(){
            console.log(i);
        }, 1000);
        console.log("Hi");        
    }
}

printWithDelay2([1,9,3,8,5,6,7]);