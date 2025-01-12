import React, { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faUser,
  faGraduationCap,
  faBriefcase,
  faCertificate,
  faCode,
  faTrophy,
  faBuilding,
  faCalendarAlt,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faKeyboard,
  faBook,
  faLightbulb,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

function App() {
  const [cvData, setCvData] = useState(null);

  useEffect(() => {
    fetch('https://ozgecvproject.onrender.com/api/cv')
      .then((response) => response.json())
      .then((data) => setCvData(data));
  }, []);

  return (
    <div className="cv-container">
      {cvData ? (
        <div>
          <header className="cv-header">
            <h1>{cvData.name}</h1>
            <p>
              <strong>{cvData.jobTitle}</strong>
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {cvData.address} |{' '}
              <FontAwesomeIcon icon={faPhone} /> {cvData.phone} |{' '}
              <FontAwesomeIcon icon={faEnvelope} /> {cvData.email}
            </p>
          </header>

          <section className="cv-section">
            <h2>
              <FontAwesomeIcon icon={faUser} /> Personal Information
            </h2>
            <div>
              <p>
                <strong>Profile:</strong> {cvData.profile}
              </p>
            </div>
            <div className="two-column">
              <p>
                <strong>Birth Date:</strong> {cvData.personalInformation.birthDate}
              </p>
              <p>
                <strong>Birth Place:</strong> {cvData.personalInformation.birthPlace}
              </p>
            </div>
            <div className="two-column">
              <p>
                <strong>Nationality:</strong> {cvData.personalInformation.nationality}
              </p>
              <p>
                <strong>Languages:</strong> {cvData.languages.join(', ')}
              </p>
            </div>
          </section>

          <section className="cv-section">
            <h2>
              <FontAwesomeIcon icon={faGraduationCap} /> Education
            </h2>
            <div className="education-grid">
              {cvData.education.map((edu, index) => (
                <div className="education-card" key={index}>
                  <h3 className="education-school">{edu.school}</h3>
                  {edu.degree && (
                    <div className="education-degree">
                      <FontAwesomeIcon icon={faGraduationCap} /> {edu.degree}
                    </div>
                  )}
                  <p className="education-years">
                    <FontAwesomeIcon icon={faCalendarAlt} /> {edu.startingYear} - {edu.finishingYear}
                  </p>
                  <p className="education-gpa">
                    <FontAwesomeIcon icon={faStar} /> GPA: {edu.gpa}
                  </p>
                  {edu.scholarship && (
                    <p className="education-scholarship">
                      <strong>Full Scholarship</strong>
                    </p>
                  )}
                  {edu.doubleDegree && (
                    <p className="education-doubledegree">
                      <strong>Double Degree</strong>
                    </p>
                  )}
                  {edu.description && (
                    <div className="education-description">
                      <strong>{edu.description}</strong>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="cv-section">
            <h2>
              <FontAwesomeIcon icon={faBriefcase} /> Experience
            </h2>
            <div className="experience-grid">
              {cvData.experience.map((exp, index) => (
                <div className="experience-card" key={index}>
                  <h3 className="experience-title">{exp.jobTitle}</h3>
                  <p className="experience-company">
                    <FontAwesomeIcon icon={faBuilding} /> {exp.company}
                  </p>
                  <p className="experience-years">
                    <FontAwesomeIcon icon={faCalendarAlt} /> {exp.years}
                  </p>
                  <p className="experience-description">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="cv-section">
            <h2>
              <FontAwesomeIcon icon={faCertificate} /> Certificates
            </h2>
            {cvData.certificates.map((cert, index) => (
              <div className="cv-item" key={index}>
                <h3>{cert.certificatename}</h3>
                <div className="two-column">
                  <p>
                    {cert.firm}
                  </p>
                  <p>
                    <strong>Year:</strong> {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </section>

          <section className="cv-section">
            <h2>
              <FontAwesomeIcon icon={faTrophy} /> Achievements
            </h2>
            <ul>
              {cvData.achievements.map((ach, index) => (
                <li key={index}>{ach}</li>
              ))}
            </ul>
          </section>

          <section className="cv-section">
            <h2>
              <FontAwesomeIcon icon={faCode} /> Programming Skills
            </h2>
            <ul className="skill-list">
              {cvData.programmingSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className="cv-section">
            <h2>
              <FontAwesomeIcon icon={faKeyboard} /> Computer Skills
            </h2>
            <ul className="skill-list">
              {cvData.computerSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className="cv-section">
            <h2>
              <FontAwesomeIcon icon={faBook} /> Publications
            </h2>
            {cvData.publications.map((pub, index) => (
              <div className="cv-item" key={index}>
                <p>
                  <strong>{pub.authors}:</strong> "{pub.title}" - {pub.journal} ({pub.year})
                </p>
              </div>
            ))}
          </section>

          <section className="cv-section">
            <h2>
              <FontAwesomeIcon icon={faGraduationCap} /> Conferences
            </h2>
            <ul>
              {cvData.conferences.map((conf, index) => (
                <li key={index}>{conf}</li>
              ))}
            </ul>
          </section>

          <section className="cv-section">
            <h2>
              <FontAwesomeIcon icon={faLightbulb} /> University Activities
            </h2>
            <ul>
              {cvData.universityActivities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </section>
          
          <section className="cv-section">
            <h2>
              <FontAwesomeIcon icon={faStar} /> Hobbies
            </h2>
            <ul>
              {cvData.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </section>
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
