import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todo from './Components/Todo';
import Addtodo from './Components/Addtodo';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<Todo/>}/>
    <Route path="/addtodo" exact element={<Addtodo/>}/>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
