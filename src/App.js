import React, { useEffect, useState } from 'react';

function App() {
  const [cvData, setCvData] = useState(null);

  useEffect(() => {
    // API'yi çağırarak CV verilerini al
    fetch('https://ozgecvproject.onrender.com/api/cv')
      .then(response => response.json())
      .then(data => setCvData(data));
  }, []);

  return (
    <div className="App">
      {cvData ? (
        <div>
          <h1>{cvData.name}</h1>
          <h2>{cvData.profession}</h2>
          <p>{cvData.contact}</p>
          <h3>Education</h3>
          <ul>
            {cvData.education.map((edu, index) => (
              <li key={index}>{edu.school} - {edu.degree}</li>
            ))}
          </ul>
          <h3>Experience</h3>
          <ul>
            {cvData.experience.map((exp, index) => (
              <li key={index}>{exp.jobTitle} at {exp.company} for {exp.years} years</li>
            ))}
          </ul>
          <h3>Skills</h3>
          <ul>
            {cvData.skills.map((skill, index) => (
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
