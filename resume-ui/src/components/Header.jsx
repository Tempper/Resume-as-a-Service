export default function Header({ toggleTheme }) {
  return (
    <div className="header">
      <h1>Welcome, C-Jay</h1>
      <button className="toggle-btn" onClick={toggleTheme}> Toggle Theme</button>
    </div>
  );
}