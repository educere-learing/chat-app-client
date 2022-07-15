import { Routes, Route } from "react-router-dom";
import Join from "./screens/Join";
import Chat from "./screens/Chat";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Join />} />
        <Route path='chat' element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
