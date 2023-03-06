const getSavedTodos = function () {
    const toDoJSON = localStorage.getItem('todo')

    if (toDoJSON) {
        return JSON.parse(toDoJSON)
    }
    return []
}

const addTodo = function (array, value) {
    array.push({id: uuidv4(), title: value, completed: false})
    renderTodos(todos, filters)
}

const renderTodos = function (todos, filters) {
    notes.innerHTML = ''

    const filteredTodos = todos.filter(function (todo) {
        const filterByText = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const filterByComplete = !filters.hideCompleted || !todo.completed
        return filterByText && filterByComplete
    })
    const incompleteTasks = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    notes.appendChild(renderSummaryDOM(incompleteTasks))

    filteredTodos.forEach(function (todo) {
        notes.appendChild(generateTodoDOM(todo))
    })
}

const saveTodo = function (todos) {
    localStorage.setItem('todo', JSON.stringify(todos))
}

const generateTodoDOM = function (todo) {
    const element = document.createElement('div')
    const span = document.createElement('span')
    const input = document.createElement('input')
    const button = document.createElement('button')
    span.textContent = todo.title
    button.textContent = 'x'
    input.setAttribute('type', 'checkbox')
    element.appendChild(input)
    element.appendChild(span)
    element.appendChild(button)
    return element
}

const renderSummaryDOM = function (todosSummary) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${todosSummary.length} todos left`
    return summary
}