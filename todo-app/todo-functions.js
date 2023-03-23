const nowTimestamp = moment().valueOf()
const getSavedTodos = () => {
    const toDoJSON = localStorage.getItem('todo')
    try {
        return toDoJSON ? JSON.parse(toDoJSON) : []
    } catch (e) {
        return []
    }
}

const addTodo = (array, value) => {
    const id = uuidv4()
    array.push({id, title: value, completed: false, createdAt: nowTimestamp, updatedAt: nowTimestamp})
    location.assign(`/edit.html#${id}`)
}

const sortTodos = (array, option) => {
    if (option === 'createdBy') {
        return array.sort((a, b) => {
            if (a.createdAt < b.createdAt) {
                return 1
            } else if (a.createdAt > b.createdAt) {
                return -1
            } else {
                return 0
            }
        })
    } else if (option === 'updatedBy') {
        return array.sort((a, b) => {
            if (a.updatedAt < b.updatedAt) {
                return 1
            } else if (a.updatedAt > b.updatedAt) {
                return -1
            } else {
                return 0
            }
        })
    } else if (option === 'alphabetical') {
        return array.sort((a, b) => {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else if (a.title < b.title) {
                return -1
            } else {
                return 0
            }
        })
    }
}


const renderTodos = (todos, filters) => {
    notes.innerHTML = ''
    sortTodos(todos, filters.searchBy)
    const filteredTodos = todos.filter((todo) => {
        const filterByText = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const filterByComplete = !filters.hideCompleted || !todo.completed
        return filterByText && filterByComplete
    })
    const incompleteTasks = filteredTodos.filter((todo) => !todo.completed)

    notes.appendChild(renderSummaryDOM(incompleteTasks))

    filteredTodos.forEach((todo) => {
        notes.appendChild(generateTodoDOM(todo))
    })
}

const saveTodo = (todos) => {
    localStorage.setItem('todo', JSON.stringify(todos))
}

const removeTodo = (array, id) => {
    const todoIndex = array.findIndex((item) => item.id === id)
    if (todoIndex > -1) {
        array.splice(todoIndex, 1)
        saveTodo(todos)
    }
}

const toggleTodo = (array, id) => {
    const todo = array.find((todo) => todo.id === id)
    if (todo) {
        todo.completed = !todo.completed
        saveTodo(todos)
        renderTodos(todos, filters)
    }
}


const generateTodoDOM = (todo) => {
    const element = document.createElement('div')
    const textEl = document.createElement('a')
    const input = document.createElement('input')
    const button = document.createElement('button')
    textEl.textContent = todo.title
    textEl.setAttribute('href', `/edit.html#${todo.id}`)
    button.textContent = 'x'
    input.setAttribute('type', 'checkbox')
    element.appendChild(input)
    element.appendChild(textEl)
    element.appendChild(button)

    input.checked = todo.completed

    input.addEventListener('change', () => {
        toggleTodo(todos, todo.id)
    })

    button.addEventListener('click', () => {
        removeTodo(todos, todo.id)
        renderTodos(todos, filters)
    })

    return element
}

const renderSummaryDOM = (todosSummary) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${todosSummary.length} todos left`
    return summary
}