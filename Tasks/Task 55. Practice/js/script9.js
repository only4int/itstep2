let button = document.querySelector("button");

button.addEventListener("click", function(){

    if(this.classList.contains("btn-edit")){

        let text = document.querySelector("p").innerText;

        let input = document.createElement("input");
        input.type = "text";
        input.value = text;
        input.name = "text";

        document.querySelector("div").insertAdjacentElement("afterbegin",input);
        document.querySelector("p").style.display = "none";
        this.innerText = "Сохранить";
        this.classList.remove("btn-edit");
        this.classList.add("btn-save");

    } else if(this.classList.contains("btn-save")){

        let text = document.querySelector("input").value;
        document.querySelector("p").innerText = text;

        document.querySelector("input").remove();
        document.querySelector("p").style.display = "block";
        this.innerText = "Редактировать";
        this.classList.remove("btn-save");
        this.classList.add("btn-edit");

    }

})