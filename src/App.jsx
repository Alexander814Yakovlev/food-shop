import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <>
      <Router basename="/food-shop">
        <Header />
        <main className="container content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/category/:strCategory" component={CategoryPage} />
            <Route path="/meal/:idMeal" component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
