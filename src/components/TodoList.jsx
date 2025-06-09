import React, { useState } from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, addTodo, deleteTodo, editTodo }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        addTodo(input);
        setInput('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a task..."
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
                ))}
            </ul>
        </div>
    );
}