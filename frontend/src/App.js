import React from "react";
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import Users from "./components/Users";
function App() {
  return (
    <Router>
      <Header />
    <Routes>

    <Route path='/' element={<Home />} />
    <Route path='/myusers' element={<Users />} />
    <Route path='/register' element={<Register />} />

      

        </Routes>
    </Router>
  );
}

export default App;
