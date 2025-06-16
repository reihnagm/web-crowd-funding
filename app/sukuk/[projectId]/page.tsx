"use client"

import React from "react";

import { useParams } from 'next/navigation';

import Sukuk from "@components/sukuk/Sukuk";

import { projects } from "@components/home/Home";

const SukukPage: React.FC = () => {
  const params = useParams();
  const { projectId } = params;

  const project = projects.find(p => p.id === projectId);

  if (!project) return <div>Project not found</div>;

  return (
    <Sukuk project={project} />
  );
};

export default SukukPage;
