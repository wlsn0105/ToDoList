import { useState, useEffect } from "react"
import { List } from "@mui/material"
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { Box } from "@mui/material";

const getInitialTodos = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) return [];
    return data;
}

export default function ToDoList() {
    const [todos, setTodos] = useState(getInitialTodos)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const removeTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((t) => t.id !== id)
        })
    }
    const toggleTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, completed: !todo.completed}   
                }
                else {
                    return todo;
                }
            })
        })
    }

    const addTodo = (text) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { text: text, id: crypto.randomUUID(), completed: false }];
        });
    }
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            m: 3
        }}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <TodoForm addTodo={addTodo} />
                {todos.map((todo) => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        remove={removeTodo}
                        toggle={toggleTodo} />
                ))}
            </List>
        </Box>
    )
}