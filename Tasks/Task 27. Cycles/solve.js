console.log("Task 1");

var i = 1;

while(i < 11){
    console.log(i);

    i++;
}


console.log("Task 2");

for(let k = 20; k >= 11; k--){
    console.log(k);
}

i = 20;

while(i >= 11){
    console.log(i);
    i--;
}

console.log("Task 3");

i = 1;

while(i <= 10){
    console.log(`4 x ${i} = ${4*i}`);
    i++;
}

for(let i = 1; i <= 10; i++){
    console.log(`4 x ${i} = ${4*i}`);
}

console.log("Task 4");

var s = 0;
i = 1;
var N = 1000;

while(i <= N){

    if(i % 2 == 0){
        s+= i;
    }

    i++;
}
console.log(s);

s = 0;
for(let i = 1; i <= N; i++){
    if(i % 2 == 0){
        s+= i;
    }
}
console.log(s);

console.log("Task 5");

for(let i = 20; i <= 50; i++){
    if((i % 3 == 0) && (i % 5 != 0)){
        console.log(i);
    }
}