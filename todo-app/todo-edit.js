const todoId = location.hash.substring(1)
let todos = getSavedTodos()
let todo = todos.find((todo) => todo.id === todoId)

const editEl = document.querySelector('#last-edited')
const input = document.querySelector('#todo-title')
const removeButton = document.querySelector('#todo-remove')

const renderEditInfo = () => {
    editEl.textContent = `Last edited ${moment(todo.updatedAt).fromNow()}`
}

renderEditInfo()

input.value = todo.title

input.addEventListener('input', (e) => {
    todo.title = e.target.value
    todo.updatedAt = nowTimestamp
    saveTodo(todos)
    renderEditInfo()
})

removeButton.addEventListener('click', () => {
    removeTodo(todos, todoId)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'todo') {
        todos = JSON.parse(e.newValue)
        todo = todos.find((todo) => todo.id === todoId)
        input.value = todo.title
    }
})