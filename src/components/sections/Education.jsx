import React from 'react';
import { personalInfo } from '../../data/personal';
import './Education.css';

export function Education() {
  const coursework = [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Design & Analysis of Algorithms",
    "Computer Organization",
    "Discrete Mathematics",
    "Theory of Computation",
    "Object-Oriented Programming",
    "Web Development"
  ];

  return (
    <div className="education-block" aria-label="Academic Details">
      <div className="education-header font-mono">
        <span className="edu-tag">ACADEMIC BACKGROUND</span>
      </div>

      <dl className="education-grid">
        <div className="edu-cell">
          <dt className="edu-label font-mono">DEGREE</dt>
          <dd className="edu-value font-body">{personalInfo.degree}</dd>
        </div>

        <div className="edu-cell">
          <dt className="edu-label font-mono">INSTITUTION</dt>
          <dd className="edu-value font-body">
            {personalInfo.college.startsWith('[') ? (
              <span className="honest-placeholder">{personalInfo.college}</span>
            ) : (
              personalInfo.college
            )}
          </dd>
        </div>

        <div className="edu-cell">
          <dt className="edu-label font-mono">AFFILIATED UNIVERSITY</dt>
          <dd className="edu-value font-body">{personalInfo.university}</dd>
        </div>

        <div className="edu-cell">
          <dt className="edu-label font-mono">TIMELINE</dt>
          <dd className="edu-value font-body">
            {personalInfo.duration.startsWith('[') ? (
              <span className="honest-placeholder">{personalInfo.duration}</span>
            ) : (
              personalInfo.duration
            )}
          </dd>
        </div>
      </dl>

      <div className="coursework-section">
        <span className="coursework-title font-mono">CS CORE COURSEWORK</span>
        <ul className="coursework-chips">
          {coursework.map((course) => (
            <li key={course} className="tag-chip tag-chip--mono">
              {course}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
