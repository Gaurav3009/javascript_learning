const h1 = document.getElementById("main-title");
h1. addEventListener('click', ()=>{
    h1.textContent = "Website hacked";
    h1.style.color = "red";
});

// const ul = document.querySelector('ul');
// const c = ul.children;
// console.log(c[1]); // selcts only the elememt nodes
// console.log(ul.childNodes); // selects all the nodes including text nodes

// console.log(ul.firstChild, ul.firstElementChild);

// const liFirst = document.querySelector("li");
// const p = liFirst.parentNode; // return the parent node 
// console.log(p);

// console.log(liFirst.closest('body'));

// console.log(ul.previousSibling);// returns teh text nodes
// console.log(ul.previousElementSibling); // returns header (element node)


const section = document.querySelector("section");
section.addEventListener("mouseover", ()=>{
    section.style.backgroundColor = "blue";
    section.style.cursor = "pointer";
});
section.addEventListener("mouseout", ()=>{
    section.style.backgroundColor = "red";
});

const btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
    // if(section.className == "red-bg visible"){
    //     section.className = "red-bg invisible";
    // }else{
    //     section.className = "red-bg visible";
    // }
    // section.classList.toggle("visible");
    section.classList.toggle("invisible");
});

    // Addding a new list item using innerHML
    const list = document.querySelector('ul');
    list.innerHTML = list.innerHTML + '<li class = "list-item">Item 4</li>';

    const div = document.querySelector('div');
    div.insertAdjacentHTML('beforeend', '<p>Something went wrong</p>');

// const lis = document.querySelector('ul');
// const newLi = document.createElement('li');
// newLi.textContent = 'Item 5';
// list.appendChild(newLi); // to add new list?
// list.append(newLi, "New Content");
// list.prepend(newLi);
// const latestLi = newLi.cloneNode(false);
// latestLi.textContent = "Item 6";
// list.appendChild(latestLi);

const listItems = list.querySelector("li");
const listItems2 = list.querySelectorAll("li");
console.log(listItems);
console.log(listItems2);
