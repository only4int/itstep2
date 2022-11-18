function getDividers(n){

    let result = [];
    let j = 0;

    for(let i = 1; i <= n; i++){
        if(n % i == 0){
            result[j] = i;
            j++;
        }
    }

    return result;
}


console.log(getDividers(44));
