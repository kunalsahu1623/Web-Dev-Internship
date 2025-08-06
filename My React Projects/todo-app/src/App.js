import Header from "./header";
import AddTodoPage from "./AddTodoPage";
import ShowToDoPage from "./ShowTodoPage";
import DoneToDoPage from "./DoneTodoPage";
import Footer from "./Footer";
import Homepage from "./Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  let [todo, setTodo] = useState([])
   

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Add" element={<AddTodoPage todo={todo} setTodo={setTodo} />} />
        <Route path="Show" element={<ShowToDoPage todo={todo} setTodo={setTodo} />} />
        <Route path="Done" element={<DoneToDoPage todo={todo} setTodo={setTodo} />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;