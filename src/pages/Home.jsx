import React, { useEffect } from "react";
import {
  Categories,
  PizzasBlock,
  SortPopup,
  PizzaLoadingBlock,
} from "../components";
import { useSelector, useDispatch } from "react-redux";

import { setCategory } from "../redux/actions/filters";
import { fetchPizzas, setPizzas } from "../redux/actions/pizzas";

const categoreNames = [
  "Мясные",
  "Вегетарианские",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} items={categoreNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzasBlock key={obj.id} isLoading={true} {...obj} />
            ))
          : Array(12).fill(<PizzaLoadingBlock />)}
      </div>
    </div>
  );
};

export default Home;
