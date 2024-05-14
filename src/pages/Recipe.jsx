import { useHistory, useParams } from "react-router-dom";
import { getMealById } from "../api";
import { useEffect, useState } from "react";

function Recipe() {
  const { goBack } = useHistory();
  const { idMeal } = useParams();
  const [info, setInfo] = useState([]);
  const ingridients = [...Array(20)]
    .map((_, id) =>
      [info[`strIngredient${id + 1}`], info[`strMeasure${id + 1}`]]
    )
    .filter((x) => x[0]);

  useEffect(() => {
    getMealById(idMeal).then((data) => setInfo(data.meals[0]));
  }, [idMeal]);
  return (
    <>
      <button className="btn blue" onClick={goBack}>
        Back
      </button>
      <div className="recipe">
        <div className="recipe-image">
          <img src={info.strMealThumb} alt={info.strMeal} />
        </div>
        <div className="recipe-info">
          <h4>{info.strMeal}</h4>
          {info.strArea ? <h6>Area: {info.strArea}</h6> : null}
          <p>{info.strInstructions}</p>
        </div>
      </div>
      {info.strYoutube ? (
        <div className="video-recipe">
          <h5>Video recipe</h5>
          <iframe
            width="600"
            height="350"
            src={`https://www.youtube.com/embed/${
              info.strYoutube.split("=")[1]
            }`}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
      ) : null}
      {ingridients.length ? (
        <div className="ingridients">
          <table className="highlight">
            <caption>Ingridients</caption>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
            {ingridients.map((item, id) => (
              <tr key={id}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
              </tr>
            ))}
            </tbody>
          </table>
          {/* <h6>Ingridients</h6>
          <ul>
            {ingridients.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul> */}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Recipe;
