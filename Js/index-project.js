
const post = []
const almacenarposts = async() =>{
    
    for(let i = 1; i <= 3; i++){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+ i)
    const data = await response.json();
    post.push(data)
    }
}
const lore = []
const almacenarlore = async() =>{
    
    
    const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler')
    const data = await response.json();
    lore.push(data)
    
}



async function print() {
    await almacenarlore()
document.querySelector(`#lore`).innerHTML =`${lore[0]}`
}


async function print1() {
    await almacenarposts()
           document.querySelector(`#maintitle`).innerHTML =`${post[0].title}`
           document.querySelector(`#flexsubttile`).innerHTML =`${post[0].body}`
    for(let i = 0; i <= 2; i++){
        document.querySelector(`.art${i+1}`).innerHTML =`${post[i].title}`    
    }
    for(let i = 0; i <= 2; i++){
        document.querySelector(`.body${i+1}`).innerHTML =`${post[i].body}`
    }    
}
    print()
    print1()

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
    
    