
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
        if (event.target.tagName == 'LI') {
            event.target.classList.toggle('done');
        } else if(event.target.tagName == 'BUTTON') {
            // alert('btnka');
            let div = event.target.parentNode;
            div.remove();
        }
    });
}


