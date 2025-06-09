import React, { useState } from 'react';

export default function TodoItem({ todo, deleteTodo, editTodo }) {
    const [isEditing, setEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEdit = () => {
        editTodo(todo.id, newText);
        setEditing(false);
    };

    return (
        <li>
            {isEditing ? (
                <>
                    <input value={newText} onChange={(e) => setNewText(e.target.value)} />
                    <button onClick={handleEdit}>Save</button>
                </>
            ) : (
                <>
                    <span>{todo.text}</span>
                    <button onClick={() => setEditing(true)}>Edit</button>
                </>
            )}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
}