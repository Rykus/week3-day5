
const post = []
const almacenarposts = async() =>{
    
    for(let i = 1; i <= 3; i++){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/'+ i)
    const data = await response.json();
    post.push(data)
    }
}

console.log(post)


function print(){
    almacenarposts()
      .then((post)=>{
              document.querySelector(`#art1`).innerHTML =`${post[0].title}`
              }
      )}
    
    print()
    