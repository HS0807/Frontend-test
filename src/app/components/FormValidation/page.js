"use client";

import React, { useState } from "react";

export default function FormValidation() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const [submittedEmail, setSubmittedEmail] = useState("");
    const [submitedPassword, setSubmittedPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmittedEmail(email);
        setSubmittedPassword(password);

        const newErrors = {};

        if (!email) {
            newErrors.email = "Email is required";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must contain at least 6 characters";
        }

        setErrors(newErrors);

    };

    return (
        <div className="m-5">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2"
                />

                {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                )}

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border p-2"
                />

                {errors.password && (
                    <p className="text-red-500">{errors.password}</p>
                )}

                <button className="bg-blue-500 text-white p-2">Submit</button>
            </form>
            <div>
                <p>Email: {submittedEmail}</p>
                <p>password: {submitedPassword}</p>
            </div>
        </div>
    );
}
