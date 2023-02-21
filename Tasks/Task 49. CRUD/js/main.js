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

    let editButton = document.createElement("button");
    editButton.innerText = "Редактировать";
    li.insertAdjacentElement("beforeend", editButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Удалить";
    li.insertAdjacentElement("beforeend", deleteButton);

    deleteButton.addEventListener("click", () => {
        let ul = this.parentElement.parentElement;
        this.parentElement.remove(); //this = deleteButton

        if(ul.children.length == 0){
            ul.remove();
        }
    })

    editButton.addEventListener("click", () => {
        let text = this.parentElement.firstChild.nodeValue;

        this.querySelector("input").value = text;
    });
    // li.addEventListener("click", function(){
        
    //     let parent = this.parentElement;
    //     this.remove();

    //     if(parent.children.length  == 0){
    //         parent.remove();
    //     }
    // })
});
