import Todo from "./Todo";

function TodoList({ todos, deleteTodo, toggleTodo }) {
    return <div>
        {!todos.length && <h3>Todo list is empty </h3>}
        {todos.map((todo) => <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
        />
        )}
    </div>
}

export default TodoList;