import React from "react";

import type { Metadata } from "next";
import Verification from "@components/auth/verification/Verification";

export const metadata: Metadata = {
  title: "Verification | CapBridge",
  description: "CapBridge",
};

const VerificationPage: React.FC = () => {
  return <Verification />;
};

export default VerificationPage;
