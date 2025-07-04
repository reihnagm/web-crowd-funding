import React from "react";
import { Metadata } from "next";

import Sukuk from "@components/sukuk/Sukuk";
import { projects } from "@app/lib/data/projects";

interface Params {
  projectId: string;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.projectId);

  if (!project) {
    return {
      title: "Project not found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: project.title,
    description: "Sukuk project detail",
  };
}

const SukukPage = ({ params }: { params: Params }) => {
  // const project = projects.find((p) => p.id === params.projectId);

  // if (!project) return <div>Project not found</div>;

  return <Sukuk />;
};

export default SukukPage;
