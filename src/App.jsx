import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import UserForm from "./UserForm";
import Home from "./Home";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home  />}/>
          <Route path="/add" element={<UserForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
