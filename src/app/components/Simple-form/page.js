"use client";
import React from 'react'
import { useState } from 'react';

export default function SimpleForm() {

     const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmittedName(name);
    setSubmittedEmail(email);
  };

  return (
    <div className='m-5 grid grid-cols-4'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border'
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border mt-2'
        />

        <button className='bg-gray-500 rounded m-4 p-2' type="submit">Submit</button>
      </form>

      <p>Name: {submittedName}</p>
      <p>Email: {submittedEmail}</p>
    </div>
  )
}

