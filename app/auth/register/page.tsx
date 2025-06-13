import React from "react";

import type { Metadata } from "next";

import Register from "@/app/components/auth/register/Register";

export const metadata: Metadata = {
  title: "Admin | Register",
  description: "Register",
};

const RegisterPage: React.FC = () => {
  return (
    <Register />
  );
};

export default RegisterPage;
