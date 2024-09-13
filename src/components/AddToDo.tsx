import { useState } from "react"
import { useTodos } from "../store/todos"


const AddToDo = () => {
    const [todo, setTodo] = useState('')
    const {handleAddToDo} = useTodos();

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddToDo(todo);
        setTodo('')
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default AddToDo
