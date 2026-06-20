import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/mealplanner.css";

function MealPlanner() {

  const [goal, setGoal] = useState("maintain");

  const mealPlans = {

    lose: [
      "🥣 Oatmeal & Fruits",
      "🥗 Grilled Chicken Salad",
      "🍲 Vegetable Soup"
    ],

    maintain: [
      "🍳 Eggs & Toast",
      "🍚 Rice & Chicken",
      "🐟 Fish with Vegetables"
    ],

    gain: [
      "🥪 Peanut Butter Sandwich",
      "🍗 Chicken Rice Bowl",
      "🥤 Protein Shake"
    ]

  };

  return (
    <>
      <Navbar />

      <div className="meal-page">

        <div className="meal-card">

          <h1>Meal Planner</h1>

          <label>Select Goal</label>

          <select
            value={goal}
            onChange={(e) =>
              setGoal(e.target.value)
            }
          >

            <option value="lose">
              Weight Loss
            </option>

            <option value="maintain">
              Maintain Weight
            </option>

            <option value="gain">
              Weight Gain
            </option>

          </select>

          <div className="meal-results">

            <h2>Recommended Meals</h2>

            {mealPlans[goal].map((meal, index) => (

              <div
                key={index}
                className="meal-item"
              >
                {meal}
              </div>

            ))}

          </div>

        </div>

      </div>
    </>
  );
}

export default MealPlanner;