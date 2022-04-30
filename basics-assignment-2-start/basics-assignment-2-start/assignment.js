const task3Element = document.getElementById('task-3');

function func1(){
    alert('Welcome!');
}

function func2(name){
    alert(name);
}

function func3(a, b, c){
    return a + b + c;
}

task3Element.addEventListener('click', func1);

alert(func3('Welcome', 'to', 'JavaScript'));

