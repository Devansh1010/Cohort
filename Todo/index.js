let draggedContent = null
const addTask = (id) => {
    const input = document.querySelector(`#${id}-input`).value;

    if (!input || input.trim() === '') {
        return;
    }

    const taskElement = document.createElement('input');
    taskElement.value = input;  
    taskElement.setAttribute('readOnly',  true)

    const btn = document.createElement('button')
    
   
    const taskContainer = document.querySelector(`#${id}-container`);
    taskContainer.appendChild(taskElement);
    taskElement.setAttribute('draggable', true)
    taskElement.addEventListener('dragstart', dragStart)
    taskElement.addEventListener('dragend', dragEnd)
    document.querySelector(`#${id}-input`).value = null

}



function dragStart(){
    this.classList.add('dragging')
    draggedContent = this
}

function dragEnd(){
    this.classList.remove('dragging')
}

const taskHolders = document.querySelectorAll('.task-container')
taskHolders.forEach((taskHolder) => {
    taskHolder.addEventListener('dragover', dragOver)
})

function dragOver() {
    // event.preventDefault() //block the ifi functions
    this.appendChild(draggedContent)

}

