let square = document.querySelector(".square");

square.addEventListener("mouseover", function(event){

    let styles = getComputedStyle(this);

    let width = parseInt(styles.width, 10);
    let height = parseInt(styles.height, 10);

    let x = Math.round(event.clientX - width/2);
    let y = Math.round(event.clientY - height/2);

    this.style.position = "fixed";
    this.style.top = `${y}px`;
    this.style.left = `${x}px`;
})

square.addEventListener("mousemove", function(event){
    let styles = getComputedStyle(this);

    let width = parseInt(styles.width, 10);
    let height = parseInt(styles.height, 10);

    let x = Math.round(event.clientX - width/2);
    let y = Math.round(event.clientY - height/2);

    this.style.top = `${y}px`;
    this.style.left = `${x}px`;
});