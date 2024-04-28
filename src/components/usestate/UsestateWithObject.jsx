import { useState } from "react";

const UsestateWithObject = () => {
  const [person, setPerson] = useState({
    name: "Jon Doe",
    job: "software engineer",
    skills: "JavaScript, React, Node",
  });


  const displayEmployee = () => {
    setPerson({
      ...person,
      name: "Jon Doe Celesky"
    })
  }


  return (
    <div className="withobj">
      <h2>UsestateWithObject</h2>

      <div>
        <p>
          <b>Employee</b>: {person.name}
        </p>
        <p>
          <b>Job Title</b>: {person.job}
        </p>
        <p>
          <b>Skills</b>: {person.skills}
        </p>
      </div>

      <button className="btn" onClick={displayEmployee}>Show Employee current Profile</button>
    </div>
  );
};
export default UsestateWithObject;
