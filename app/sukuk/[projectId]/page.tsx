import React from "react";
import { Metadata } from "next";

import Sukuk from "@components/sukuk/Sukuk";

interface Params {
  projectId: string;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
 

  return {
    title: "Suku Title",
    description: "Sukuk project detail",
  };
}

const SukukPage = ({ params }: { params: Params }) => {
  // const project = projects.find((p) => p.id === params.projectId);

  // if (!project) return <div>Project not found</div>;

  return <Sukuk />;
};

export default SukukPage;
