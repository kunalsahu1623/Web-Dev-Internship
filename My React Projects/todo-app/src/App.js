import Header from "./header";
import AddTodoPage from "./AddTodoPage";
import ShowToDoPage from "./ShowTodoPage";
import DoneToDoPage from "./DoneTodoPage";
import Footer from "./Footer";
import HomePage from "./Homepage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Header />
          <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Add" element={<AddTodoPage />}/>
          <Route path="Show" element={<ShowToDoPage />}/>
          <Route path="Done" element={<DoneToDoPage />}/>
           </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;