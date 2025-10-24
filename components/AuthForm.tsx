"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

import InputField from "./InputField";
import Button from "./Button";
import { registerUser, loginUser } from "../app/lib/api";

interface AuthFormProps {
  type: "login" | "register";
}

// ✅ Validation Schemas
const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type RegisterFormData = z.infer<typeof registerSchema>;
type LoginFormData = z.infer<typeof loginSchema>;

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const router = useRouter();
  const schema = type === "register" ? registerSchema : loginSchema;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData | LoginFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: RegisterFormData | LoginFormData) => {
    try {
      if (type === "register") {
        await registerUser(data);
        toast.success("Registration successful!");
        router.push("/login");
      } else {
        await loginUser(data);
        toast.success("Login successful!");
        router.push("/dashboard");
      }
    } catch (err) {
      toast.error("Something went wrong, please try again.");
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-sm mx-auto mt-20 bg-white shadow-lg rounded-2xl p-6"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center capitalize">
          {type === "login" ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          {type === "register" && (
            <div>
              <InputField
                label="Full Name"
                type="text"
                placeholder="Enter your name"
                {...register("name" as const)}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message as string}
                </p>
              )}
            </div>
          )}

          <div>
            <InputField
              label="Email"
              type="email"
              placeholder="Enter your email"
              {...register("email" as const)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message as string}
              </p>
            )}
          </div>

          <div>
            <InputField
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register("password" as const)}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message as string}
              </p>
            )}
          </div>

          <Button
            type="submit"
            label={
              isSubmitting
                ? "Please wait..."
                : type === "login"
                ? "Login"
                : "Register"
            }
            loading={isSubmitting}
          />
        </form>

        <p className="text-sm text-center mt-4 text-gray-500">
          {type === "login" ? (
            <>
              Don’t have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Register
              </a>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Login
              </a>
            </>
          )}
        </p>
      </motion.div>
    </>
  );
};

export default AuthForm;
