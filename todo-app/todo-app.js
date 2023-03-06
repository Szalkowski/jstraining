const todos = getSavedTodos()
const addTodoInput = document.querySelector('#search-notes')
const notes = document.querySelector('#notes')

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

addTodoInput.addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    const value = e.target.elements.todo.value
    if (value) {
        addTodo(todos, value)
    }
    saveTodo(todos)
    e.target.elements.todo.value = ''
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
