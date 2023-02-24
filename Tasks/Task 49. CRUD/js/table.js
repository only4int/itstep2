let buttonAdd = document.querySelector(".btn_add");
buttonAdd.addEventListener("click", function(){
    let food = document.querySelector("#food").value;
    let weight = document.querySelector("#weight").value;

    let tr = document.createElement("tr");
    
    let tdFood = document.createElement("td");
    tdFood.innerText = food;

    let tdWeight = document.createElement("td");
    tdWeight.innerText = weight;

    let tdAction = document.createElement("td");

    let editButton = document.createElement("button");
    editButton.innerText = "Редактировать";
    tdAction.insertAdjacentElement("beforeend", editButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Удалить";
    tdAction.insertAdjacentElement("beforeend", deleteButton);

    tr.insertAdjacentElement("beforeend", tdFood);
    tr.insertAdjacentElement("beforeend", tdWeight);
    tr.insertAdjacentElement("beforeend", tdAction);

    let tbody = document.querySelector("tbody");
    tbody.insertAdjacentElement("beforeend", tr);

    deleteButton.addEventListener("click", function(){
        this.parentElement.parentElement.remove();
    });

    editButton.addEventListener("click", function(){
        let food = this.parentElement.parentElement.firstElementChild.innerText;
        let weight = this.closest("tr").children[1].innerText;

        document.querySelector("#food").value = food;
        document.querySelector("#weight").value = weight;
        let editTr = document.querySelector(".edit");
        if(editTr){
            editTr.classList.remove("edit");
        }
        this.parentElement.parentElement.classList.add("edit");
    })
});

let buttonSave = document.querySelector(".btn_save");
buttonSave.addEventListener("click", function(){
    let editTr = document.querySelector(".edit");
    if(editTr){
        let food = document.querySelector("#food").value;
        let weight = document.querySelector("#weight").value;

        editTr.firstChild.innerText = food;
        editTr.children[1].innerText = weight;

        editTr.classList.remove("edit");
    }
});