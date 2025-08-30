/**
 * Add new board
 * select button responcible to add new board
 * add event listner
 * when clickd show form
 * take data like title, color of the board
 * set data to that board
 * append that board to end of the all boards in container
 */

const btnBoard = document.querySelector('.btn-new-board')
const formElement = document.querySelector('.center-form')
const previousTasks = []
const previousTaskBoards = []


btnBoard.addEventListener('click', () => {
  formElement.style.display = 'flex'
  kanbanBoard.style.opacity = 0.6
})

const kanbanBoard = document.querySelector('.kanban-container')
kanbanBoard.addEventListener('click', () => {
  formElement.style.display = 'none'
  kanbanBoard.style.opacity = 1
})

//function declarations

//create Board
function taskBoard(titleValue) {
  const board = document.createElement('div')
  board.classList.add('kanban-board')
  board.id = titleValue

  // create inner div of board where task appending
  const header = document.createElement('div')
  header.classList.add('board-header')
  header.innerHTML = `<span class="board-title">${titleValue}</span> <span class="board-cancel">&#10006;</span>`

  board.appendChild(header)

  const taskContainer = document.createElement('div')
  taskContainer.classList.add('board-tasks')

  board.appendChild(taskContainer)

  //Create Add task Button
  const addBtn = document.createElement('button')
  addBtn.innerHTML = 'Add Task'
  addBtn.classList.add('add-task-btn')
  board.appendChild(addBtn)

  document.querySelector('.kanban-container').appendChild(board)
}


//add task to particulat board
function addTaskFunction(event) {
  const board = event.target.closest('.kanban-board');
  if (!board) return;

  const taskTitle = prompt('Task Title');
  if (!taskTitle) return;

  const tasksContainer = board.querySelector('.board-tasks');
  if (!tasksContainer) return;

  //Task-card container
  const taskEl = document.createElement('div');
  taskEl.classList.add('task-card');
  taskEl.classList.add('priority-medium');

  //priority Span
  const prioritySpan = document.createElement('span')
  taskEl.appendChild(prioritySpan)
  prioritySpan.classList.add('priority-dot')

  //title span
  const titleSpan = document.createElement('span')
  taskEl.appendChild(titleSpan)
  titleSpan.classList.add('task-title')
  titleSpan.innerHTML = taskTitle

  //task actions
  const taskActionContainer = document.createElement('div')
  taskActionContainer.classList.add('task-actions')

  //edit button
  const editTaskButton = document.createElement('button')
  editTaskButton.classList.add('edit-btn')
  editTaskButton.setAttribute('title', 'Edit Task')
  editTaskButton.innerHTML = `
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.8 2.8l0.9 0.9a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-0.5 0.28l-2.25 0.5a0.25 0.25 0 0 1-0.3-0.3l0.5-2.25A1 1 0 0 1 3 10.9l8-8a1 1 0 0 1 1.4 0z"
      stroke="#6366f1"
      stroke-width="1.1"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
`
  editTaskButton.addEventListener('click', (e) => {
    const closetCard = e.target.closest('.task-card')
    previousTasks.push(closetCard)
    previousTaskBoards.push(closetCard.closest('.kanban-board'))
    const updatedTitle = prompt('Enter Title')

    const closetCardTitle = closetCard.querySelector('.task-title')
    closetCardTitle.innerHTML = updatedTitle

  })

  

  //delete btn
  const deleteTaskButton = document.createElement('button')
  deleteTaskButton.classList.add('delete-btn')
  deleteTaskButton.setAttribute('title', 'Delete Task')
  deleteTaskButton.innerHTML = `
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <rect x="3.5" y="6" width="9" height="7" rx="1" stroke="#9CA3AF"
                                        stroke-width="1.1" />
                                    <path d="M6.5 8v3m3-3v3M5.3 3.5h5.5" stroke="#9CA3AF" stroke-width="1.1"
                                        stroke-linecap="round" />
                                    <rect x="6" y="2" width="4" height="2" rx="0.5" stroke="#9CA3AF"
                                        stroke-width="1.1" />
                                </svg>`


  deleteTaskButton.addEventListener('click', (e) => {
    const closetCard = e.target.closest('.task-card')
    previousTasks.push(closetCard)
    previousTaskBoards.push(closetCard.closest('.kanban-board'))
    closetCard.remove()

  })

  taskActionContainer.appendChild(editTaskButton)
  taskActionContainer.appendChild(deleteTaskButton)



  taskEl.appendChild(taskActionContainer)
  attachTOBoard(taskEl)
  tasksContainer.appendChild(taskEl);
}


// function attach task to board
function attachTOBoard(target) {
  target.setAttribute('draggable', 'true')
  target.addEventListener('dragstart', () => {
    target.classList.add('flying')

  })
  target.addEventListener('dragend', () => {
    target.classList.remove('flying')

  })

}

//fuction to attach event listners to each task action button



//taking data from from
formElement.addEventListener('submit', function (event) {
  event.preventDefault()

  const titleValue = document.getElementById('title').value;
  const colorValue = formElement.querySelector('input[name="color"]:checked');
  const selectedColor = colorValue ? colorValue.value : null; // Check if selected

  taskBoard(titleValue)


  document.getElementById('title').value = '' //Clear the form title

  //close the form
  formElement.style.display = 'none'
  kanbanBoard.style.opacity = 1

})

/**
 * Select the buttons
 * add eventListerns 
 * when click that particular board must be delete
 */


const kanbanContainer = document.querySelector('.kanban-container');

kanbanContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('board-cancel')) {
    const board = event.target.closest('.kanban-board');
    if (board) {
      board.remove();
    }
  }

  /**
   * select board
   * add click listner to it
   * if click contains the button to add task
   * find the closed board with closet()
   * and create new div and append to that board
   */
  if (event.target.classList.contains('add-task-btn')) {
    addTaskFunction(event)

  }

});

const allTasks = document.querySelectorAll('.task-card')

allTasks.forEach((task) => {
  attachTOBoard(task)
})

const allBoards = document.querySelectorAll('.kanban-board')

allBoards.forEach((board) => {
  board.addEventListener('dragover', () => {
    const flyingEl = document.querySelector('.flying')
    const boardTasksDiv = board.querySelector('.board-tasks');
    boardTasksDiv.append(flyingEl)
  })
})



//undo task

document.addEventListener('keydown', function(event) {
  // Check if Control (or Meta for Mac) and 'z' are pressed
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'z') {
    event.preventDefault(); // Optional: Prevent default undo behavior
    // Your undo functionality here
    const undoTask = previousTasks.pop()
    const undoTaskBoard = previousTaskBoards.pop()

    const taskSection = undoTaskBoard.querySelector('.board-tasks')

    taskSection.appendChild(undoTask)

    // callUndoFunction();
  }
});


