import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

function NotFound() {
  const { goBack } = useHistory();
  return (
    <>
      <button className="btn blue" onClick={goBack}>
        Back
      </button>
      <div className="center not-found">
        <h1 className="not-found">
          <i className="material-icons">search</i>
        </h1>
        <h1 className="not-found">Page Not Found</h1>
        <Link to="/">Go to main page</Link>
      </div>
    </>
  );
}

export default NotFound;
