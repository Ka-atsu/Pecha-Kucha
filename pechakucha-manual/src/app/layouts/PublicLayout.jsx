import { NavLink, Outlet } from "react-router";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about-pk", label: "About PK" },
  { to: "/manual", label: "Manual" },
  { to: "/tips", label: "Tips" },
  { to: "/examples", label: "Examples" },
  { to: "/generator", label: "Generator" },
];

export default function PublicLayout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f6f1e8",
        color: "#111111",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "rgba(246, 241, 232, 0.92)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(17,17,17,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "1rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                letterSpacing: "-0.03em",
              }}
            >
              PechaKucha
            </div>
            <div style={{ fontSize: "0.8rem", color: "#666" }}>
              20 × 20 prototype
            </div>
          </div>

          <nav style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  padding: "0.65rem 0.95rem",
                  borderRadius: "999px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  transition: "0.2s ease",
                  background: isActive ? "#111111" : "#ffffff",
                  color: isActive ? "#ffffff" : "#111111",
                  border: isActive
                    ? "1px solid #111111"
                    : "1px solid rgba(17,17,17,0.08)",
                  boxShadow: isActive ? "none" : "0 8px 18px rgba(0,0,0,0.04)",
                })}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main style={{ maxWidth: "1180px", margin: "0 auto", padding: "1.5rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
