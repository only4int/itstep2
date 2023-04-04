function getUnionOfArray(a, b){
    let result = [];

    a.forEach((item) => {
        if(b.includes(item) && !result.includes(item)){//b.indexOf(item) >=0 && result.indexOf(item) == -1
            result.push(item);
        }
    })

    return result;
}


console.log(getUnionOfArray([1,2,3,2], [1, 2, 4, 1]));