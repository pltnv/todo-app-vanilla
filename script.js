
    document.querySelector('input').addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            listMaker();
        }

    })

function listMaker() {
    let inp = document.getElementById('inp').value;
    let todoList = document.getElementById('todo-list')
    let todoContent = document.createElement('div');
    todoContent.classList.add("todo");


    const todoElement = document.createElement('li');
    todoElement.classList.add('listElement');
    todoElement.textContent = inp;
    todoContent.appendChild(todoElement);


    let buttonDelete = document.createElement('button');
    buttonDelete.classList.add('btn-delete');
    buttonDelete.textContent = '-';
    todoContent.appendChild(buttonDelete);
    todoList.appendChild(todoContent);
    document.getElementById('inp').value = '';
}

todoList = document.getElementById('todo-list');
if(todoList) {
    todoList.addEventListener('click', function (event) {
        console.log(event);
        // console.log(event.target.tagName);
        // console.log(event.target.tagName == 'LI');
        if (event.target.tagName == 'LI') {
            event.target.classList.toggle('done');
        } else if(event.target.tagName == 'BUTTON') {
            // alert('btnka');
            let div = event.target.parentNode;
            div.remove();
        }
    });


}



    // let todoElement = document.createElement('li');
    // todoElement.classList.add('listElement');
    // todoElement.innerHTML = note;
    // todoContent.appendChild(todoElement);
    // let buttonDelete = document.createElement('button');
    // buttonDelete.classList.add('btn-delete');
    // buttonDelete.textContent = '-';
    // todoContent.appendChild(buttonDelete);
    // todoList.appendChild(todoContent);}






// код 23 сент

//
// let itemsArr = []; //сущ
// function createNote() {
//     let note = document.getElementById('inp').value; //содержит содержимое инпута
//     itemsArr.push(note);
//     localStorage.setItem('items', JSON.stringify(itemsArr)) //записываются в localstorage
//     return note;
//
// }

// console.log(itemsArr);     !!! реально выводит содержимое и если вывести массив то в нем всегда бует свежая коллекция инпутв



// const todoList = document.querySelector('.todo-list')
//
// function listMaker(note) {
//     const todoContent = document.createElement('div');
//     todoContent.classList.add("todo");
//     const todoElement = document.createElement('li');
//     todoElement.classList.add('listElement');
//     todoElement.innerHTML = note;
//     todoContent.appendChild(todoElement);
//     const buttonDelete = document.createElement('button');
//     buttonDelete.classList.add('btn-delete');
//     buttonDelete.textContent = '-';
//     todoContent.appendChild(buttonDelete);
//     todoList.appendChild(todoContent);}
//
//
//
// function call() {
//     listMaker(createNote());
//
// }


// код 23 сент зконч















//
//
// const todoDiv = document.createElement('div')
// todoDiv.classList.add('todo');
// const newTodo = document.createElement('li');
// newTodo.innerText = 'hey'
// newTodo.classList.add('todo-item');
// todoDiv.appendChild(newTodo);
// const complButton = document.createElement('button');
// complButton.innerHTML = '-';
// complButton.classList.add('complete-btn');
// todoDiv.appendChild(complButton);





