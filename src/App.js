import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [cvData, setCvData] = useState(null);

  useEffect(() => {
    // CV verisini backend'den al
    fetch('https://ozgecvproject.onrender.com/api/cv')
      .then(response => response.json())
      .then(data => setCvData(data));
  }, []);

  return (
    <div className="cv-container">
      {cvData ? (
        <div>
          <header className="cv-header">
            <h1>{cvData.name}</h1>
            <p><strong>Address:</strong> {cvData.address}</p>
            <p><strong>Phone:</strong> {cvData.phone} | <strong>Email:</strong> {cvData.email}</p>
          </header>

          <div className="cv-section">
            <h2>Personal Information</h2>
            <p><strong>Birth Date:</strong> {cvData.personalInformation.birthDate}</p>
            <p><strong>Birth Place:</strong> {cvData.personalInformation.birthPlace}</p>
            <p><strong>Nationality:</strong> {cvData.personalInformation.nationality}</p>
          </div>

          <div className="cv-section">
            <h2>Profile</h2>
            <p>{cvData.profile}</p>
          </div>

          <div className="cv-section">
            <h2>Languages</h2>
            <ul className="cv-skills">
              {cvData.languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>

          <div className="cv-section">
            <h2>Education</h2>
            {cvData.education.map((edu, index) => (
              <div className="cv-item" key={index}>
                <h3>{edu.school}</h3>
                <p><strong>Degree:</strong> {edu.degree} | <strong>GPA:</strong> {edu.gpa}</p>
                <p><strong>Years:</strong> {edu.startingYear} - {edu.finishingYear}</p>
                {edu.description && <p>{edu.description}</p>}
                {edu.scholarship && <p><strong>Scholarship:</strong> {edu.scholarship}</p>}
                {edu.doubleDegree && <p><strong>Double Degree:</strong> Yes</p>}
              </div>
            ))}
          </div>

          <div className="cv-section">
            <h2>Experience</h2>
            {cvData.experience.map((exp, index) => (
              <div className="cv-item" key={index}>
                <h3>{exp.jobTitle}</h3>
                <p><strong>Company:</strong> {exp.company}</p>
                <p><strong>Years:</strong> {exp.years}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="cv-section">
            <h2>Publications</h2>
            <ul>
              {cvData.publications.map((pub, index) => (
                <li key={index}>
                  {pub.authors}. <strong>{pub.title}</strong>. {pub.journal} ({pub.year}).
                </li>
              ))}
            </ul>
          </div>

          <div className="cv-section">
            <h2>Achievements</h2>
            <ul>
              {cvData.achievements.map((ach, index) => (
                <li key={index}>{ach}</li>
              ))}
            </ul>
          </div>

          <div className="cv-section">
            <h2>University Activities</h2>
            <ul>
              {cvData.universityActivities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>

          <div className="cv-section">
            <h2>Hobbies</h2>
            <ul className="cv-skills">
              {cvData.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>

          <div className="cv-section">
            <h2>Certificates</h2>
            {cvData.certificates.map((cert, index) => (
              <div className="cv-item" key={index}>
                <h3>{cert.certificatename}</h3>
                <p><strong>Firm:</strong> {cert.firm} | <strong>Year:</strong> {cert.year}</p>
              </div>
            ))}
          </div>

          <div className="cv-section">
            <h2>Conferences</h2>
            <ul>
              {cvData.conferences.map((conf, index) => (
                <li key={index}>{conf}</li>
              ))}
            </ul>
          </div>

          <div className="cv-section">
            <h2>Computer Skills</h2>
            <ul className="cv-skills">
              {cvData.computerSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="cv-section">
            <h2>Programming Skills</h2>
            <ul className="cv-skills">
              {cvData.programmingSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <footer className="cv-footer">
            <p>© {new Date().getFullYear()} {cvData.name} - All rights reserved.</p>
          </footer>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
