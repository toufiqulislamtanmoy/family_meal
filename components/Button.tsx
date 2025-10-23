import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button", loading }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-70"
    >
      {loading ? "Please wait..." : label}
    </button>
  );
};

export default Button;
