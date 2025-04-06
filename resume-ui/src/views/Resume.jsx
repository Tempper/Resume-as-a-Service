import './Resume.css';

// Resume component takes in `data` from the API and renders each section
export default function Resume({ data, toggleTheme, darkMode }) {
  const {
    name,
    title,
    contact,
    education,
    experience,
    projects,
    certificationsSkillsInterests,
  } = data;

  return (
    <div className="resume-container">
      {/* Header with name and contact info */}
      <header className="resume-header">
      <div className="header-top">
        <h1>{name}</h1>
        {/* Toggle theme button */}
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
      <p className="contact-info">
        {contact.email} | {contact.phone} |
        <a href={contact.github} target="_blank" rel="noreferrer"> GitHub</a> |
        <a href={contact.linkedIn} target="_blank" rel="noreferrer"> LinkedIn</a>
      </p>
    </header>

      {/* Education Section */}
      <section>
        <h3>EDUCATION</h3>
        <div className="flex-between">
          <strong>{education[0].institution}</strong>
          <span><em>Expected: {education[0].graduationYear}</em></span>
        </div>
        <em>{education[0].degree}</em>
        {/* Optional: dynamically render relevant coursework if present */}
        {education[0].coursework && (
          <ul>
            <li><strong>Relevant Coursework:</strong> {education[0].coursework.join(', ')}</li>
          </ul>
        )}
      </section>

      {/* Work Experience Section */}
      <section>
        <h3>WORK EXPERIENCE</h3>
        {experience.map((exp, i) => (
          <div key={i}>
            <div className="flex-between">
              <strong>{exp.company}</strong>
              <span>{exp.startDate} - {exp.endDate}</span>
            </div>
            <em>{exp.role}</em>
            <ul>
              {/* Handle both single string or array of bullet points */}
              {Array.isArray(exp.description)
                ? exp.description.map((point, j) => <li key={j}>{point}</li>)
                : <li>{exp.description}</li>
              }
            </ul>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section>
        <h3>PROJECTS</h3>
        {projects.map((proj, i) => (
          <div key={i}>
            <div className="flex-between">
              <strong>{proj.title} <span className="italic">– Personal Project</span></strong>
              {/* Link to live demo or repo */}
              <div className="demo-date-container">
              <a href={proj.link} target="_blank" rel="noreferrer">Live Demo</a>
              <span>{proj.date}</span>
              </div>
            </div>
            <ul>
              {Array.isArray(proj.description)
                ? proj.description.map((point, j) => <li key={j}>{point}</li>)
                : <li>{proj.description}</li>
              }
            </ul>
          </div>
        ))}
      </section>

      {/* Skills, Certifications & Interests Section */}
      <section>
        <h3>CERTIFICATIONS, SKILLS & INTERESTS</h3>
        <ul>
          <li><strong>Certifications:</strong> {certificationsSkillsInterests.certifications.join(', ')}</li>
          <li><strong>Technologies:</strong> {certificationsSkillsInterests.technologies.join(', ')}</li>
          <li><strong>Skills:</strong> {certificationsSkillsInterests.skills.join(', ')}</li>
          <li><strong>Interests:</strong> {certificationsSkillsInterests.interests.join(', ')}</li>
        </ul>
      </section>
    </div>
  );
}
