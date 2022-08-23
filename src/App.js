import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Routes, Route } from "react-router-dom";
import { fetchPizzas, setPizzas } from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();

  // установка JSON через global в powershell
  // C:\Users\79375\desktop\Учеба\react\react-pizza> json-server --watch public/db.json --port 3001

  useEffect(() => {
    console.log(dispatch(fetchPizzas()));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
