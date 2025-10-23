"use client";
import React from "react";

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm text-gray-700 mb-1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-800"
      />
    </div>
  );
};

export default FormInput;
