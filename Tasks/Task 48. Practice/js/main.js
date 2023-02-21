let button = document.querySelector("button");
button.addEventListener("click", function(){
    let div = document.querySelector("div");

    let ul = div.querySelector("ul");

    if(!ul){
        ul = document.createElement("ul");
        div.insertAdjacentElement("afterbegin", ul);
    }

    let task = document.querySelector("input").value;

    let li = document.createElement("li");
    li.innerText = task;
    ul.insertAdjacentElement("beforeend", li);

    li.addEventListener("click", function(){
        
        let parent = this.parentElement;
        this.remove();

        if(parent.children.length  == 0){
            parent.remove();
        }
    })
});
let lis = document.querySelectorAll("li");

if(lis.length > 0){
    Array.from(lis).forEach((li) => {
         li.addEventListener("click", function(){
            this.remove();
        })
    })
}