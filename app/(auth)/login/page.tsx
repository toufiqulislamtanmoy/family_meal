"use client";
import React, { useState } from "react";
import AuthForm from "@/components/AuthForm";
import { handleInputChange } from "@/app/utils/FormHelper";

export default function LoginPage() {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", values);
  };

  const fields = [
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
      title="Login"
      fields={fields}
      values={values}
      onChange={(e) => handleInputChange(e, setValues)}
      onSubmit={handleSubmit}
      buttonText="Login"
    />
  );
}
