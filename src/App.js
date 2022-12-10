import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./page/login";
import JoinPage from "./page/join";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
