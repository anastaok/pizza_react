import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";

import { Header } from "./components";
import { Home, Cart } from "./pages";
import { Routes, Route } from "react-router-dom";
import { setPizzas } from "./redux/actions/pizzas";

// function App() {
//   const API = "http://localhost:3000/db.json";

//   const [pizzas, setPizzas] = useState([]);

//   useEffect(() => {
//     axios.get(API).then(({ data }) => {
//       setPizzas(data.pizzas);
//     });
//   }, []);

//   return ;
// }

class App extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    console.log(this.props.items);
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={this.props.items} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = {
  setPizzas,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
