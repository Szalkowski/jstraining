const todos = [{
    title: 'order cat food',
    completed: true
}, {
    title: 'do work',
    completed: false
}, {
    title: 'Exercise',
    completed: true
}, {
    title: 'clean kitchen',
    completed: true
}, {
    title: 'order food',
    completed: false
}]

const deleteTodo = function (array, title) {
    const index = array.findIndex(function (item) {
        return item.title.toLowerCase() === title.toLowerCase()
    })
    if (index > -1) {
        array.splice(index, 1)
    }
}

const getThingsToDo = function(array) {
    return array.filter(function(item) {
        return !item.completed
    })
}

const sortTodos = function (array) {
    array.sort(function(a,b) {
        if(!a.completed && b.completed) {
            return -1
        } else if(!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

console.log(getThingsToDo(todos))

// deleteTodo(todos, 'Exercise')
sortTodos(todos)
console.log(todos)