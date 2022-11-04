console.log("Task 5.1");

let a = ['a','b','c','d'];
console.log(`${a[0]}+${a[1]}+${a[2]}+${a[3]}`);
console.log(a[0] + "+" + a[1] + "+" + a[2] + "+" + a[3]);
console.log(a[0],"+",a[1],"+",a[2],"+",a[3]);

console.log("Task 5.2");

a = ['a','b','c','d'];

let str = a[0];
for(let i = 1; i < a.length; i++){
    str += "+" + a[i];
}
console.log(str);

str = "";
for(let i = 0; i < a.length - 1; i++){
    str += a[i] + "+";
}
str += a[a.length - 1];
console.log(str);