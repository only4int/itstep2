function getDiffDate(date1, date2){
    let a = date1.split(".").map((item) => +item);
    let b = date2.split(".").map((item) => +item);

    if((a[2]>b[2]) || ((a[2] == b[2]) && (a[1]>b[1])) || ((a[2] == b[2]) && a[1] == b[1] && a[0]>b[0])){
        return 1;
    }

    if(a[2] == b[2] && a[1] == b[1] && a[0] ==b[0]){
        return 0;
    }

    return -1;
}


let array = ["01.01.2025","01.01.2018","01.01.2022","01.01.2023","01.01.2020"];

console.log(array);

array.sort(getDiffDate);

console.log(array);