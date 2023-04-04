function superSorting(a){
    let even = a.filter((item) => item % 2 == 0).sort((a,b) => b-a); // по убыванию
    let odd = a.filter((item) => item % 2 == 1).sort((a,b) => a-b); // по возрастанию


    for(let i = 0, evenIndex = 0, oddIndex = 0; i < a.length; i++){
        if(a[i] % 2 == 0){
            a[i] = even[evenIndex];
            evenIndex++;
        } else {
            a[i] = odd[oddIndex];
            oddIndex++;
        }
    }

    return a;
}


let array = [7, 3, 4, 9, 5, 2, 17];
console.log(array);
console.log(superSorting(array));