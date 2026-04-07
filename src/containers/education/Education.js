import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {getPortfolioData } from "../../portfolio";

export default function Education() {
     const data = getPortfolioData();
    console.log("data", data);
  if (data.experience.educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">Education</h1>
        <div className="education-card-container">
          {data?.experience?.educationInfo?.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
