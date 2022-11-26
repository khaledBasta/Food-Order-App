import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import useHttp from "../../hooks/use-http";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const dataHandler = (mealsObj) => {
      const mealsList = [];
      for (const key in mealsObj) {
        if (Object.hasOwn(mealsObj, key)) {
          const meal = mealsObj[key];
          mealsList.push({
            id: key,
            description: meal.description,
            name: meal.name,
            price: meal.price,
          });
        }
        setMeals(mealsList);
      }
      console.log(mealsList);
    };
    fetchMeals(
      {
        url: "https://food-order-app-eb8c1-default-rtdb.europe-west1.firebasedatabase.app/meals.json",
      },
      dataHandler
    );
  }, [fetchMeals]);

  const MealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      title={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
