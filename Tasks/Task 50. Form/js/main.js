let form = document.getElementById("reg_form");

form.addEventListener("submit", function(event){
    event.preventDefault(); // отменяет стандартные действия браузера

    let div = document.querySelector(".result");

    let name = document.querySelector("#name").value;   
    div.innerHTML = div.innerHTML + `Имя: ${name}<br>`;

    let email = document.querySelector("#email").value;
    div.innerHTML += `Email: ${email}<br>`;

    let phone = document.querySelector("#phone").value;
    div.innerHTML += `Телефон: ${phone}<br>`;

    let education = document.querySelector("#education").value;
    div.innerHTML += `Образование: ${education}<br>`;

    let inputHobby1 = document.querySelector("#hobby-1");

    if(inputHobby1.checked){ // проверяет, выбранный ли данный пункт (стоит ли галочка)
        div.innerHTML += `Хобби: ${inputHobby1.value}<br>`;
    }

})