var i = 1;
var sum = 0;

while(i <= 5){
    sum += i;
    i++;
    console.log(`Итерация ${i-1} sum=${sum}, i=${i}`); 
}

console.log(sum); // 15
console.log(i); // 6
/*
i = 1, sum = 0
1. Итерация

1 <= 5 - true

sum = sum + 1 // sum = 1
i = i + 1 // i = 2

2. Итерация

2 <= 5  - true

sum = sum + 2 // sum = 3
i = i + 1 // i = 3

3. Итерация

3 <= 5 - true

sum = sum + 3 // sum = 6
i = i + 1 // i = 4

4. Итерация

4 <= 5 - true

sum = sum + 4 // sum = 10
i = i + 1 // i = 5

5. Итерация

5 <= 5 - true

sum = sum + 5 // sum = 15
i = i + 1 // i = 6

6. Итерация

6 <= 5 - false

конец цикла
переходим к командам после цикла
*/
// Найти произведение первых пяти натуральных четных чисел
// Вариант 1
var n = 2; // первое число
var p = 1; // начальное произведение

while(n <= 10){

    p *= n; // p = p * n

    n += 2; // n = n + 2 - подготовка значений для следующей итерации цикла

    console.log(`Итерация ${n/2-1} p=${p}, n=${n}`); 
}

console.log(p);
console.log(n);

// Вариант 2

n = 1, p = 1;

while(n <= 5){

    p = p * (2 * n);
    n++;
    console.log(`Итерация ${n-1} p=${p}, n=${n}`); 
    
}