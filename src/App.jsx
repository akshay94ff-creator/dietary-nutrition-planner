import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import BMICalculator from "./pages/BMICalculator";
import CalorieCalculator from "./pages/CalorieCalculator";
import MealPlanner from "./pages/MealPlanner";
import AllergyChecker from "./pages/AllergyChecker";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/bmi" element={<BMICalculator />} />

        <Route path="/calories" element={<CalorieCalculator />} />

        <Route path="/meal-planner" element={<MealPlanner />} />

        <Route path="/allergy-checker" element={<AllergyChecker />} />

        <Route path="/analytics" element={<Analytics />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;