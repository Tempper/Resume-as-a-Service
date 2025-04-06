export default function Resume({ data}) {
  // destructure resume data for easy access
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
    
    <div className="max-w-3xl mx-auto p-4 font-serif text-gray-900 dark:text-gray-100 dark:bg-gray-900 leading-snug">

      {/* Header with name and contact info */}
      <header className="relative">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold border-b-2 border-gray-800 pb-2 mb-2">{name}</h1>
        </div>
        <p className="text-sm">
          {contact.email} | {contact.phone} |
          <a href={contact.github} target="_blank" rel="noreferrer" className="ml-2 text-blue-600 hover:underline">GitHub</a> |
          <a href={contact.linkedIn} target="_blank" rel="noreferrer" className="ml-2 text-blue-600 hover:underline">LinkedIn</a>
        </p>
      </header>

      {/* Education Section */}
      <section>
        <h3 className="text-base font-bold border-y border-gray-800 py-1 mt-4">EDUCATION</h3>
        <div className="flex justify-between mt-2 font-bold">
          <strong>{education[0].institution}</strong>
          <span className="italic">Expected: {education[0].graduationYear}</span>
        </div>
        <em>{education[0].degree}</em>
        {education[0].coursework && (
          <ul className="mt-1 list-disc list-inside">
            <li><strong>Relevant Coursework:</strong> {education[0].coursework.join(', ')}</li>
          </ul>
        )}
      </section>

      {/* Work Experience Section */}
      <section>
        <h3 className="text-base font-bold border-y border-gray-800 py-1 mt-4">WORK EXPERIENCE</h3>
        {experience.map((exp, i) => (
          <div key={i} className="mt-2">
            <div className="flex justify-between mt-2 font-bold">
              <strong>{exp.company}</strong>
              <span>{exp.startDate} - {exp.endDate}</span>
            </div>
            <em>{exp.role}</em>
            <ul className="mt-1 list-disc list-inside">
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
        <h3 className="text-base font-bold border-y border-gray-800 py-1 mt-4">PROJECTS</h3>
        {projects.map((proj, i) => (
          <div key={i} className="mt-2">
            <div className="flex justify-between mt-2 font-bold">
              <strong>
                {proj.title} <span className="italic">– Personal Project</span>
              </strong>
              <div className="flex gap-4">
                <a href={proj.link} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Live Demo</a>
                <span>{proj.date}</span>
              </div>
            </div>
            <ul className="mt-1 list-disc list-inside">
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
        <h3 className="text-base font-bold border-y border-gray-800 py-1 mt-4">CERTIFICATIONS, SKILLS & INTERESTS</h3>
        <ul className="mt-1 list-disc list-inside">
          <li><strong>Certifications:</strong> {certificationsSkillsInterests.certifications.join(', ')}</li>
          <li><strong>Technologies:</strong> {certificationsSkillsInterests.technologies.join(', ')}</li>
          <li><strong>Skills:</strong> {certificationsSkillsInterests.skills.join(', ')}</li>
          <li><strong>Interests:</strong> {certificationsSkillsInterests.interests.join(', ')}</li>
        </ul>
      </section>
    </div>
  );
}