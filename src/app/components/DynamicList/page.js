"use client";

import React, { useState } from "react";

export default function DynamicList() {
  const [skills, setSkills] = useState("");
  const [myskills, setMySkills] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setMySkills([...myskills, { skills }]);
    setSkills("");
  };

  let addedskills = myskills.map((s, i) => {
    return (
      <li key={i}>
        <h3>{s.skills}</h3>
      </li>
    );
  });

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="Enter Skills...."
          className='border-2 m-5 p-2'
        />

        <button className="bg-black text-white p-2 text-2xl rounded m-5">Add Skill</button>
      </form>

      <ul>
        {addedskills}
      </ul>
    </div>
  );
}