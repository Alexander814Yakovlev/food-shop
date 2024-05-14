import CategoryItem from "./CategoryItem";

function CategoryList(props) {
  const { catalog } = props;
  return (
    <div className="catalog">
      {catalog.map((cat) => (
        <CategoryItem
          key={cat.idCategory}
          {...cat}
        />
      ))}
    </div>
  );
}

export default CategoryList;
