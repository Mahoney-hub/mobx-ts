import {makeAutoObservable} from 'mobx';

type TodoType = {
    id: number
    title: string
    completed: boolean
}

class Todo {
    todos = [
        {id: 1, title: 'First Title', completed: false},
        {id: 2, title: 'Second Title', completed: false},
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo: TodoType) {
        this.todos.push(todo)
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    changeStatusTodo(id: number) {
        this.todos = this.todos.map(todo => (todo.id !== id) ? todo : {...todo, completed: !todo.completed})
    }

    fetchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.todos = [...this.todos, json]
            })
    }
}

export default new Todo()