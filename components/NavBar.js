import Link from "next/link";

export default function NavBar() {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>ZOBRINO</div>
      <div style={linksStyle}>
        <Link href="/">Inicio</Link>
        <Link href="/subscribe">Planes</Link>
        <Link href="/dashboard">Consola</Link>
      </div>
    </nav>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 25px",
  background: "#111",
  color: "white",
  fontFamily: "Arial, sans-serif",
};

const logoStyle = {
  fontWeight: "bold",
  fontSize: "18px",
  letterSpacing: "1px",
};

const linksStyle = {
  display: "flex",
  gap: "20px",
  fontSize: "14px",
};
