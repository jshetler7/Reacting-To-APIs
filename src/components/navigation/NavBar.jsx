export default function NavBar({ className = "", children }) {
    return (
      <nav
        className={`nav bg-dark justify-content-around px-5 py-2 shadow mb-5 ${className}`}
      >
        {children}
      </nav>
    );
  }
  