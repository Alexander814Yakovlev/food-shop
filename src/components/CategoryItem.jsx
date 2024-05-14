import { Link } from "react-router-dom/cjs/react-router-dom.min";

function CategoryItem(props) {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>

      <div className="card-content">
        <h5 className="card-title">{strCategory}</h5>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
        <Link
          to={`/category/${strCategory.toLowerCase()}`}
          className="btn blue"
        >
          Show more
        </Link>
      </div>
    </div>
  );
}

export default CategoryItem;
