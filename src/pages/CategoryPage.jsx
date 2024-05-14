import { filterByCategory } from "../api";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import MealItem from "../components/MealItem";

function CategoryPage() {
  const { strCategory } = useParams();
  const { goBack } = useHistory();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    filterByCategory(strCategory).then((data) => setMeals(data.meals));
  }, [strCategory]);

  return (
    <>
      <button className="btn blue" onClick={goBack}>
        Back
      </button>
      <div className="catalog">
        {meals.map((meal) => (
          <MealItem key={meal.idMeal} {...meal} />
        ))}
      </div>
    </>
  );
}

export default CategoryPage;
