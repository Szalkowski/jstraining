let todos = getSavedTodos()
const addTodoInput = document.querySelector('#search-notes')
const notes = document.querySelector('#notes')

const filters = {
    searchText: '',
    hideCompleted: false,
    searchBy: 'createdBy'
}

renderTodos(todos, filters)

addTodoInput.addEventListener('input',  (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const value = e.target.elements.todo.value
    if (value) {
        addTodo(todos, value)
    }
    saveTodo(todos)
    e.target.elements.todo.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

window.addEventListener('storage', (e) => {
    if(e.key === 'todo') {
        todos = JSON.parse(e.newValue)
        renderTodos(todos, filters)
    }
})

document.querySelector('#sort-by').addEventListener('change', (e) => {
    filters.searchBy = e.target.value
    renderTodos(todos, filters)
})
