import { Link } from "react-router-dom/cjs/react-router-dom.min";

function MealItem(props) {
  const { idMeal, strMeal, strMealThumb } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <h5 className="card-title">{strMeal}</h5>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn blue">
          Watch recipe
        </Link>
      </div>
    </div>
  );
}

export default MealItem;
