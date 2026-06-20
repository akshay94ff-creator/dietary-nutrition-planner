import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/allergy.css";

function AllergyChecker() {

  const [food, setFood] = useState("");

  const allergies = {
    milk: "Contains Dairy",
    peanut: "Contains Nuts",
    shrimp: "Contains Seafood",
    egg: "Contains Egg",
    wheat: "Contains Gluten"
  };

  const result =
    allergies[food.toLowerCase()];

  return (
    <>
      <Navbar />

      <div className="allergy-page">

        <div className="allergy-card">

          <h1>Allergy Checker</h1>

          <input
            type="text"
            placeholder="Enter Food Item"
            value={food}
            onChange={(e) =>
              setFood(e.target.value)
            }
          />

          {food && (

            <div className="allergy-result">

              {result ? (

                <>
                  <h2>⚠ Warning</h2>
                  <p>{result}</p>
                </>

              ) : (

                <>
                  <h2>✅ Safe</h2>
                  <p>No known allergy detected</p>
                </>

              )}

            </div>

          )}

        </div>

      </div>
    </>
  );
}

export default AllergyChecker;