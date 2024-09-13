import AddToDo from "./components/AddToDo"
import Navbar from "./components/Navbar"
import Todos from "./components/Todos"
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <AddToDo />
      <Todos />
    </div>
  )
}

export default App
