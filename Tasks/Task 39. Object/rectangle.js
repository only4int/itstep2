let Rectangle = {
    length: 3,
    width: 8,
    getPerimetr(){
        return (this.length + this.width) * 2;
    },
    getSquare(){
        return this.length * this.width;
    }   
}

console.log(Rectangle.getPerimetr(), Rectangle.getSquare());

Rectangle.length = 10;

console.log(Rectangle.getPerimetr(), Rectangle.getSquare());