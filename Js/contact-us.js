let form = document.forms['dataForm'];
form.onsubmit = function (e){
    e.preventDefault();
    let fname = document.getElementById("fname").value;
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let text = document.getElementById("text").value;
    console.log(fname, email, phone, text)
}
console.log(fname, email, phone, text)