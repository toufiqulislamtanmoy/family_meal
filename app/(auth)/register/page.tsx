"use client";
import React, { useState } from "react";
import AuthForm from "@/components/AuthForm";
import { handleInputChange } from "@/app/utils/FormHelper";

export default function RegisterPage() {
  const [values, setValues] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register data:", values);
  };

  const fields = [
    { label: "Full Name", name: "name", placeholder: "Enter your name" },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter password",
    },
  ];

  return (
    <AuthForm
      title="Register"
      fields={fields}
      values={values}
      onChange={(e) => handleInputChange(e, setValues)}
      onSubmit={handleSubmit}
      buttonText="Sign Up"
    />
  );
}
