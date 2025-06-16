import React from "react";

import type { Metadata } from "next";
import Sukuk from "@components/sukuk/Sukuk";

export const metadata: Metadata = {
  title: "?",
  description: "?",
};

const SukukPage: React.FC = () => {
  return (
    <Sukuk/>
  );
};

export default SukukPage;
