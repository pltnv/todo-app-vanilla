

let arr = [];
function createNote() {
    let note = document.getElementById('inp').value;
    if (note != '') {
        arr.push(note);
        console.log(note);
        console.log(arr);
        return note;
    }
}


function listMaker(note) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = note;
    ul.appendChild(li);
}

function call() {
    let noteFor = createNote()
    // if (noteFor !=== 'undefined') {
    //     listMaker(noteFor)
    // }
    listMaker(noteFor);

}









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





