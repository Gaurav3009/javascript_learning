const h1 = document.getElementById("main-title");
h1. addEventListener('click', ()=>{
    h1.textContent = "Website hacked";
    h1.style.color = "red";
});

const ul = document.querySelector('ul');
const c = ul.children;
console.log(c[1]);