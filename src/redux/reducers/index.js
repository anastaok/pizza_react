import { combineReducers } from "redux";
import filterRuduser from "./filters";
import pizzasRuduser from "./pizzas";

const rootReducer = combineReducers({
  filter: filterRuduser,
  pizzas: pizzasRuduser,
});

export default rootReducer;
