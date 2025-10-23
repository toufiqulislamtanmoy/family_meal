"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FormInput from "./FormInput";

interface AuthFormProps {
  title: string;
  fields: {
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
  }[];
  values: Record<string, string>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  buttonText: string;
  imageSrc?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  fields,
  values,
  onChange,
  onSubmit,
  buttonText,
  imageSrc,
}) => {
  const isLogin = title.toLowerCase().includes("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm flex flex-col items-center"
      >
        {imageSrc && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src={imageSrc}
              alt="App Logo"
              width={60}
              height={60}
              className="mb-4 rounded-full shadow-sm"
            />
          </motion.div>
        )}

        <h2 className="text-3xl font-semibold text-blue-700 mb-6 tracking-tight">
          {title}
        </h2>

        <form onSubmit={onSubmit} className="w-full space-y-4">
          {fields.map((field) => (
            <FormInput
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              value={values[field.name] || ""}
              onChange={onChange}
            />
          ))}

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-blue-600 text-white py-2 rounded-lg mt-2 hover:bg-blue-700 transition-all shadow-md hover:shadow-blue-300"
          >
            {buttonText}
          </motion.button>
        </form>

        <p className="text-sm text-gray-600 mt-6">
          {isLogin ? (
            <>
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-blue-600 font-medium hover:underline"
              >
                Sign up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-blue-600 font-medium hover:underline"
              >
                Login
              </Link>
            </>
          )}
        </p>
      </motion.div>
    </div>
  );
};

export default AuthForm;
