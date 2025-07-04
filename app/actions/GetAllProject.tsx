"use client";
import axios from "axios";
import { API_BACKEND } from "../utils/constant";
import { IProject } from "../interface/IProject";

export async function getAllProject() {
  try {
    const apiUrl = `${API_BACKEND}/api/v1/project/list`;
    const response = await axios(apiUrl);
    const data : IProject = await response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
