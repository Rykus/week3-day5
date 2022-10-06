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

document.addEventListener('DOMContentLoaded', () => {

    
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
   
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        
        const target = el.dataset.target;
        el.classList.toggle('is-active');
        
        document.querySelector('#tab').classList.toggle('is-active')
        document.querySelector('#tab').classList.toggle('activebonito')
        document.querySelector('#traumateam').classList.toggle('navTop')
        document.querySelector('#traumateam').classList.toggle('navTop2')
        
        
      });
    });
  
  });

