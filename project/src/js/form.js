$(document).ready(function() {
    $("#formAuth").validate({
        rules: {
            user_email: "required",
            user_password: "required",
        },
        messages: {
            user_email: {
                required: "Пожалуйста введите ваш email",
            },
            user_password: {
                required: "Пожалуйста введите пароль",
            },
        },
         submitHandler: function(form){
        form.submit();
    }
    });
$("#formRegistr").validate({
    rules: {
        new_fio: "required",
        new_email: "required",
        new_phone: "required",
        new_birth: "required",
        new_snils: "required",
        agree_data: "required",
        agree_mail: "required",
    },
    messages: {
        new_fio: {
            required: "Пожалуйста введите ваше ФИО",
        },
        new_email: {
            required: "Пожалуйста введите ваш email",
        },
        new_phone: {
            required: "Пожалуйста введите ваш телефон",
            minlength: "Пожалуйста введите ваш телефон",
        },
        new_birth: {
            required: "Пожалуста введите вашу дату рождения",
        },
        new_snils: {
            required: "Пожалуйста введите ваш СНИЛС",
            minlength: "Пожалуйста введите ваш СНИЛС",
        },
        agree_data: {
            required: "Данный пункт является обязательным",
        },
        agree_mail: {
            required: "Данный пункт является обязательным",
        },
    },
    submitHandler: function(form){
        form.submit();
    }
});
});
