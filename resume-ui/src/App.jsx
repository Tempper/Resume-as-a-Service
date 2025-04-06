import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './components/Resume';
import Dashboard from './views/Dashboard';
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import "./App.css";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}
function AppContent() {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/resume/json')
      .then(res => res.json())
      .then(setResume)
      .catch(console.error);
  }, []);

  if (!resume) return <p>Loading resume...</p>;

  return (
    <Routes>
      <Route path="/" element={<Dashboard resume={resume} />} />
      <Route path="/resume" element={<Resume data={resume} />} />
    </Routes>
  );
}

function App() {


  return (
    <ThemeProvider>
      <Router>
      <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
