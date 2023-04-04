function getCompareString(str1, str2){
    let sortStr1 = str1.split("").sort().join("");
    let sortStr2 = str2.split("").sort().join("");
    if(sortStr1 == sortStr2){
        return true;
    } 
    return false;
}

console.log(getCompareString("tok","kot"));