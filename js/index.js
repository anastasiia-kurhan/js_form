document.getElementById('myform').addEventListener('submit', function (e) {
    e.preventDefault(); //видаляє стандартну поведінку сторінки (не буде перезавантажуватись)

    var el = document.getElementById('myform'); //знаходимо форму
    //знаходимо усі поля
    var username = el.username.value;
    var email = el.email.value;
    var pass = el.password.value;
    var gender = el.gender.value;
    
    //перевіряємо усі поля
    var error = '';
    if (username.length < 2)
        error = 'Ім\'я занадто мале';
    else if (email.length < 2)
        error = 'Email занадто малий';
    else if (!email.includes('@'))
        error = 'Email не має @';
    else if (pass.length < 2)
        error = 'Пароль занадто малий';
    else if (gender == null || gender == '')
        error = 'Невизначений гендер';

    //якщо є помилка то видображуємо її
    if (error != '') {
        document.getElementById('error').innerText = error;
        return false;
    }

    document.getElementById('error').innerText = ''; //прибираємо текст помилки
    window.location = 'https://www.google.com.ua/?hl=uk' //виконуємо переадресацію якщо все добре

    return false;
})

