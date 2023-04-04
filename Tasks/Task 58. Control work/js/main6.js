function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = new Array(100);

for(let i = 0; i < a.length; i++){
    a[i] = getRandomNumber(-100, 100);
}

let maxElement = a.reduce(function(max, item){
    if(item > max){
        return item;
    }
    return max;
}, a[0]);

let minElement = a.reduce(function(min, item){
    if(item < min){
        return item;
    }
    return min;
}, a[0]);

console.log(a);
console.log(minElement, maxElement, maxElement - minElement);