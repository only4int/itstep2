function sortNumber(arrNum) {
    let even = arrNum.filter(item => item % 2 == 0).sort((a, b) => b - a); //  [4, 2]
    let odd = arrNum.filter(item => item % 2 != 0).sort((a, b) => a - b); // [3, 5, 7, 9, 17]
    let result = [];

    arrNum.forEach(item => {
        if (item % 2 != 0) {
            result.push(odd.shift())
        }
        else {
            result.push(even.shift())
        }
    });
    return result
}

let arrNum = [7, 3, 2, 9, 5, 8, 17, 6, 4];
let result = sortNumber(arrNum);
console.log(result) 