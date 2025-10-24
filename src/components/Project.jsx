// Project.jsx
import React from 'react';
import dummy from './dummyData.js';
import './Project.css'

const Project = () => {
  return (
    <>
    <div className="ptitle">
        <h2>Projets</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis illum similique
            fugit fugiat error vero animi, molestias alias quis natus sunt incidunt inventore.</p>
    </div>
    <div className="project">
      {dummy.map((item) => (
        <div key={item.id} className="project-card">
          <img src={item.photoUrl} alt={item.projectName} />
          <h3>{item.projectName}</h3>
          <p>{item.description}</p>
          <div className="tags">
            {item.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="links">
            <a href={item.demo} target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={item.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Project;
