import Header from "./header";
import AddTodoPage from "./AddTodoPage";
import ShowToDoPage from "./ShowTodoPage";
import DoneToDoPage from "./DoneTodoPage";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Header />
          <AddTodoPage />
          <ShowToDoPage />
          <DoneToDoPage />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;