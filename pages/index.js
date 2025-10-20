export default function Home() {
  return (
    <main style={{ textAlign: "center", marginTop: "100px", fontFamily: "Arial" }}>
      <h1>Zobrino</h1>
      <p>Frontend conectado al backend en Google Cloud Run.</p>
      <p>Verificando conexión...</p>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            fetch("https://api.zobrino.com/healthz")
              .then(res => res.json())
              .then(data => console.log("Conexión OK:", data))
              .catch(err => console.error("Error API:", err));
          `
        }}
      />
    </main>
  );
}
