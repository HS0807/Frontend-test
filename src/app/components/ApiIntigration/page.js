"use client";
import React from 'react'
import { useState, useEffect } from 'react';

export default function ApiCall() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((Response) => Response.json())
            .then((data) => {
                setUsers(data);
            })
    })
    return (
        <div className='grid grid-cols-4'>
            {users.map((user) => (
                <div className='m-5' key={user.id}>
                    <h2>name: {user.name}</h2>
                    <h2>name: {user.email}</h2>
                    <h2>name: {user.phone}</h2>
                </div>
            ))}
        </div>
    )
}
