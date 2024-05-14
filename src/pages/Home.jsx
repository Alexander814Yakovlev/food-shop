import { useState, useEffect } from "react";
import {
  useLocation,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { getAllCategories } from "../api";
import Preloader from "../components/Preloader";
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const { push } = useHistory();

  const filterCatalog = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    push({ pathname, search: `?search=${str}` });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory.toLowerCase().includes(search.split("=")[1])
            )
          : data.categories
      );
    });
  }, [search]);
  return (
    <>
      <Search callBack={filterCatalog} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
}

export default Home;