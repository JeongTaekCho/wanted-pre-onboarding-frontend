import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./page/login";
import JoinPage from "./page/join";
import TodoList from "./page/todo-list";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
