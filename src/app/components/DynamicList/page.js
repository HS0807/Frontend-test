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

  const deleteHandler = (i) => {
    let deleteSkills = [...myskills]
    deleteSkills.splice(i,1)
    setMySkills(deleteSkills);
  }

  let addedskills = myskills.map((s, i) => {
    return (
      <li key={i} className="flex items-center justify-between">
        <div className="font-bold text-3xl m-5">
        <h3>{s.skills}</h3>
        </div>
        <button className="bg-red-200 text-white rounded p-2" onClick={() => deleteHandler(i)}>Delete Skills</button>

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

      <div>
        <h3>my skills :- </h3>
        {addedskills}
      </div>
        
    </div>
  );
}