import React, { useState, useEffect } from 'react';

const OtherExperience = () => {
  const [clientsCount, setClientsCount] = useState(0);
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [projects, setProjects] = useState(0);

  // Simulate data fetching or calculations
  useEffect(() => {
    // Fetch clients count and years of experience from your data source or perform calculations
    // For now, let's set some placeholder values
    setClientsCount(15);
    setProjects(25);
    setYearsOfExperience(2);
  }, []);

  return (
    <section>
      <h2>My Experience</h2>
      <div className="experience-cards">
        <div className="experience-card">
          <h1>{clientsCount}+</h1>
          <p>Clients</p>
        </div>
        <div className="experience-card">
          <h1>{yearsOfExperience}+</h1>
          <p>Years of Experience</p>
        </div>
        <div className="experience-card">
          <h1>{projects}+</h1>
          <p>Projects Created</p>
        </div>
      </div>
    </section>
  );
};

export default OtherExperience;
