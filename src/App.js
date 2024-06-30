import logo from './logo.svg';
import './App.css';
import CssBaseline from "@mui/material/CssBaseline"
import ToDoList from './ToDoList';
import NavBar from "./NavBar"

function App() {
  return (
    <div className="App">
      <NavBar />
      <ToDoList />
      <CssBaseline />      
    </div>
  );
}

export default App;
