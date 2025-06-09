const STORAGE_KEY = 'react-todos';

export const loadTodos = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
};

export const saveTodos = (todos) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (e) {
        console.error('Failed to save todos', e);
    }
};

// 💡 For backend integration:
// Replace localStorage logic with API calls using fetch/axios