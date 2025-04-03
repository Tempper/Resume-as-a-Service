import { useEffect, useState } from 'react';

function App() {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/resume/json')
      .then(res => res.json())
      .then(data => setResume(data));
  }, []);

  if (!resume) return <p>Loading resume...</p>;

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>{resume.name}</h1>
      <p>{resume.title}</p>
      <h2>Projects</h2>
      <ul>
        {resume.projects.map((project, index) => (
          <li key={index}>
            <strong>{project.title}</strong> – {project.date}
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;