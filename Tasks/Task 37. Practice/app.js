console.log("Task 4");

let a = [1, 2, 3, 2];
let b = [1, 2, 3, 1];

if(a.length == b.length){
    let isEqual = a.every(function(item, index){
        return a[index] == b[index]; // item == a[index]
    });
    if(isEqual){
        console.log("совпадают");
    } else {
        console.log("не совпадают");
    }
} else {
    console.log("не совпадают");
}