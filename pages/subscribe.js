export default function Subscribe() {
  const plans = [
    { name: "Básico", price: 9.99, minutes: 100 },
    { name: "Intermedio", price: 19.99, minutes: 250 },
    { name: "Familiar", price: 34.99, minutes: 500 }
  ];

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Planes de Suscripción</h1>
      <p>Elige el plan que mejor se adapte a ti.</p>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        marginTop: "30px"
      }}>
        {plans.map((plan, i) => (
          <div key={i} style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            width: "220px",
            padding: "20px",
            background: "#fff",
            boxShadow: "0 0 5px rgba(0,0,0,0.1)"
          }}>
            <h2>{plan.name}</h2>
            <p>{plan.minutes} minutos</p>
            <h3>${plan.price.toFixed(2)} / mes</h3>
            <button
              style={{
                marginTop: "15px",
                padding: "10px 20px",
                background: "#111",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
              onClick={() => alert(`Seleccionado: ${plan.name}`)}
            >
              Suscribirme
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
