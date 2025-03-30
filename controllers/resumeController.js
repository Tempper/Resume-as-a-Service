const Resume = require('../models/Resume');

// GET /resume/json
const getResumeJSON = async (req, res) => {
  try {
    const resume = await Resume.findOne().sort({ createdAt: -1 });
    if (!resume) return res.status(404).json({ message: 'Resume not found' });
    res.json(resume);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//GET /resume/HTML
const getResumeHTML = async (req, res) => {
  try {
    const resume = await Resume.findOne().sort({ createdAt: -1 });

    if (!resume) {
      return res.status(404).send('<h1>Resume not found</h1>');
    }

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>${resume.name} - Resume</title>
          <style>
            *,
            *:before,
            *:after{
            padding: 0px;
            margin: 0px;
            }
            body { font-family: garamond; max-width: 50%; padding:21.6pt 36pt 21.6pt 36pt; }
            

            h1{
            font-size: 2.333rem;
            font-weight: 700;
            border-bottom-color: black;
            border-bottom-width: 1px;
            border-bottom-style: solid;
            }
            h3{
            font-size: 1rem;
            font-weight: 700;
            }

            .contact-info{
            font-size: 1.333rem;
            font-weight: 400;
            border-bottom-color: black;
            border-bottom-width: 1px;
            border-bottom-style: solid;
            }

            #education-title{
            border-bottom-color: black;
            border-bottom-width: 1px;
            border-bottom-style: solid;}

            #education-list{;
            }
            .subheading-title{
            border-top-color: black;
            border-top-width: 1px;
            border-top-style: solid;
            border-bottom-color: black;
            border-bottom-width: 1px;
            border-bottom-style: solid;
            }
            .experience-title-container{
            display:flex;
            margin-top: 1rem;
            justify-content: space-between;
            padding-right: 2rem;
            font-weight:700;
            }
            #role{
            font-style: italic;
            font-weight: 400;
            }
            section{
            padding-top: 1rem;
            }
          </style>

        </head>
        
        <header>
          <h1 >${resume.name}</h1>
          <p class="contact-info">
          ${resume.contact.email} | ${resume.contact.phone} | <a href="${resume.contact.github}"> Github</a> | <a href="${resume.contact.linkedIn}"> linkedIn</a>
          </p>
        </header>

        <section>
          <h3 id="education-title">EDUCATION</h3>
            ${resume.education.map(edu => `
              <div style="display: flex; justify-content: space-between; font-weight: bold;">
                <span>${edu.institution}</span>
                <span>Expected: ${edu.graduationYear}</span>
              </div>

              <div style="font-style: italic; margin-bottom: 0.5rem;">
                ${edu.degree}
              </div>

              <ul id="education-list" style="margin-top: 0; padding-left: 1.2rem;">
                <li><strong>GPA:</strong> 3.8 / 4.0 – <em></em></li>
                <li><strong>Relevant Coursework:</strong> Web Dev, Databases, Algorithms</li>
                <li>Study Abroad in Japan • Captain of Uni Volleyball Team</li>
              </ul>
            `).join('')}
        </section>
        <section>
          <h3 class="subheading-title"> WORK EXPERIENCE</h3>
            ${resume.experience.map(exp => `
              <div class="experience-title-container">
              <span>${exp.company}</span>
              <span>${exp.startDate} - ${exp.endDate}</span>
              </div>
              <p id="role">${exp.role}</p>
              
              <ul>
              <li> ${exp.description}</li>
              </ul>
            `).join('')}
        <section>
          <h3 class="subheading-title"> WORK EXPERIENCE</h3>
            ${resume.projects.map(proj => `
              <div class="experience-title-container">
              <span>${proj.title}</span>
              <a href="${proj.link}"> project link</a>
              </div>
              <span>${proj.description}</span>
            `).join('')}
        </section>
        <body>


          <h3>Skills</h3>
          <ul>
            ${resume.skills.map(skill => `<li>${skill}</li>`).join('')}
          </ul>

          <h3>Experience</h3>
          <ul>

          </ul>

          
          <ul>
            ${resume.education.map(edu => `
              <li>
                ${edu.degree}, ${edu.institution} (${edu.graduationYear})
              </li>
            `).join('')}
          </ul>
        </body>
      </html>
    `;
    res.send(html);
  } catch (err) {
    res.status(500).send(`<pre>${err.message}</pre>`);
  }
};


module.exports = {
  getResumeJSON,
  getResumeHTML
};
