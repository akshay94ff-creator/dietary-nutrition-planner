import "../styles/stats.css";

function Stats() {
  const data = [
    { number: "1200+", title: "Patients" },
    { number: "5600+", title: "Meal Plans" },
    { number: "98%", title: "Success Rate" },
    { number: "4.9★", title: "Rating" }
  ];

  return (
    <section className="stats-section">
      {data.map((item, index) => (
        <div className="stat-card" key={index}>
          <h2>{item.number}</h2>
          <p>{item.title}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;