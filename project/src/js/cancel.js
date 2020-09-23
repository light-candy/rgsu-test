const formRegistr = document.querySelector("#formRegistr");
const inputs = formRegistr.querySelectorAll("input");
const submitButton = formRegistr.querySelector("input[type=submit]");

$(document).ready(function() {
    $('#cancel').click( function(event) {
        event.preventDefault();
        inputs.forEach((field) => {
            field.value = "";
            field.checked = false;
        });
        submitButton.value = "Зарегистрироваться"; 
    });
});
