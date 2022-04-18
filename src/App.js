import './App.css';
import Todos from './components/Todos.js'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Show from './components/Show.js'
import Create from './components/Create.js'
import Edit from './components/Edit.js'

function App() {
  return (
    <Router className="App">
      <nav className="link">
        <Link to="/">Home</Link>
      </nav>
      <Routes className="route">
        <Route path="/" element={<Todos />}/>
        <Route path="/:id" element={<Show />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/:id/edit" element={<Edit />}/>
      </Routes>
    </Router>
  );
}



export default App;
