function getVowels(str){

    let pattern = "aeioyu";

    let count = str.split("").filter((letter) => pattern.includes(letter)).length;

    return count;
}

console.log("Mama Papa Cat", " => ",getVowels("Mama Papa Cat"));