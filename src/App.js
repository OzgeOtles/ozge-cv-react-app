  import React, { useEffect, useState } from 'react';

  function App() {
    const [cvData, setCvData] = useState(null);

    useEffect(() => {
      // Fetch CV data from the backend API
      fetch('https://ozgecvproject.onrender.com/api/cv')
        .then(response => response.json())
        .then(data => setCvData(data));
    }, []);

    return (
      <div className="App">
        {cvData ? (
          <div>
            <h1>{cvData.name}</h1>
            <p><strong>Address:</strong> {cvData.address}</p>
            <p><strong>Phone:</strong> {cvData.phone}</p>
            <p><strong>Email:</strong> {cvData.email}</p>

            <h2>Personal Information</h2>
            <ul>
              <li><strong>Birth Date:</strong> {cvData.personalInformation.birthDate}</li>
              <li><strong>Birth Place:</strong> {cvData.personalInformation.birthPlace}</li>
              <li><strong>Nationality:</strong> {cvData.personalInformation.nationality}</li>
            </ul>

            <h3>Profile</h3>
            <p>{cvData.profile}</p>

            <h3>Languages</h3>
            <ul>
              {cvData.languages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>

            <h3>Education</h3>
            <ul>
              {cvData.education.map((edu, index) => (
                <li key={index}>
                  <p>{edu.startingYear} - {edu.finishingYear}</p>
                  <span>{edu.school} - {edu.degree} (GPA: {edu.gpa})</span>
                  <p style={{ color: 'red' }}>{edu.description}</p>
                  <span style={{ color: 'red' }}>{edu.startingYear} - {edu.finishingYear}</span>
                  {edu.scholarship && <span style={{ color: 'red' }}>Full Scholarship</span>}
                  {edu.doubleDegree && <span style={{ color: 'red' }}> - Double Degree</span>}
                </li>
              ))}
            </ul>

            <h3>Experience</h3>
            <ul>
              {cvData.experience.map((exp, index) => (
                <li key={index}>
                  {exp.jobTitle} at {exp.company} for {exp.years} years
                  <p>{exp.description}</p>
                </li>
              ))}
            </ul>

            <h3>Publications</h3>
            <ul>
              {cvData.publications.map((pub, index) => (
                <li key={index}>
                  {pub.authors}. <strong>{pub.title}</strong>. {pub.journal} ({pub.year}).
                </li>
              ))}
            </ul>

            <h3>Achievements</h3>
            <ul>
              {cvData.achievements.map((ach, index) => (
                <li key={index}>{ach}</li>
              ))}
            </ul>

            <h3>University Activities</h3>
            <ul>
              {cvData.universityActivities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>

            <h3>Hobbies</h3>
            <ul>
              {cvData.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>

            <h3>Certificates</h3>
            <ul>
              {cvData.certificates.map((certificate, index) => (
                <li key={index}>
                  <strong>{certificate.firm} ({certificate.year})</strong>: {certificate.certificatename}
                </li>
              ))}
            </ul>

            <h3>Conferences</h3>
            <ul>
              {cvData.conferences.map((conference, index) => (
                <li key={index}>{conference}</li>
              ))}
            </ul>

            <h3>Computer Skills</h3>
            <ul>
              {cvData.computerSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            <h3>Programming Skills</h3>
            <ul>
              {cvData.programmingSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }

  export default App;
