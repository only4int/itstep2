
let a = [];
const min = 50, max = 100, n = 10;

for(let i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

console.log("Task 1");
let k = 3;
for(let i = a.length - k; i < a.length; i++){
    console.log(a[i]);
}

console.log("Task 2");

k = 4;
for(let i = 0; i < a.length; i++){
    if(a[i] % k == 0){
        console.log(a[i]);
    }
}