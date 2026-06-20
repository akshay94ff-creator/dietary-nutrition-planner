import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        NutriCare
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/bmi">BMI</Link>
        </li>

        <li>
          <Link to="/calories">Calories</Link>
        </li>

        <li>
          <Link to="/meal-planner">Meal Planner</Link>
        </li>

        <li>
          <Link to="/allergy-checker">Allergy</Link>
        </li>

        <li>
          <Link to="/analytics">Analytics</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;