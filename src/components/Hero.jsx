import "../styles/hero.css";
import heroImg from "../assets/hero.svg";

function Hero() {
  return (
    <section className="hero-container">

      <div className="hero-left">

        <span className="hero-badge">
          Premium Nutrition Platform
        </span>

        <h1>
          Personalized Nutrition
          <br />
          For Better Health
        </h1>

        <p>
          Plan meals, track calories, monitor allergies,
          and improve dietary habits with an elegant
          healthcare experience.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Start Planning
          </button>

          <button className="secondary-btn">
            View Dashboard
          </button>
        </div>

      </div>

      <div className="hero-right">
        <img src={heroImg} alt="Nutrition Planner" />
      </div>

    </section>
  );
}

export default Hero;