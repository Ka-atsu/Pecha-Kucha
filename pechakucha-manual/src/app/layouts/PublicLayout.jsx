import { Outlet } from "react-router-dom";

const navItems = [
  { to: "#home", label: "Home" },
  { to: "#about-pk", label: "About PK" },
  { to: "#manual", label: "Manual" },
  { to: "#tips", label: "Tips" },
  { to: "#examples", label: "Examples" },
  { to: "#generator", label: "Generator" },
];

export default function PublicLayout() {
  return (
    <div className="public-shell">
      <header className="public-header">
        <div className="public-header__inner">
          <a href="#home" className="public-brand">
            <div className="public-brand__title">PechaKucha</div>
            <div className="public-brand__subtitle">20 × 20 prototype</div>
          </a>

          <nav className="public-nav">
            {navItems.map((item) => (
              <a key={item.to} href={item.to} className="public-nav__link">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="public-main">
        <Outlet />
      </main>
    </div>
  );
}
