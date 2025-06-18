import {
  projectDelete,
  projectList,
  projectStore,
  projectUpdate,
} from "@lib/projectService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ProjectState {
  loading: boolean;
}

const initialState: ProjectState = {
  loading: false,
};

export const projectListAsync = createAsyncThunk("project/list", async () => {
  const response = await projectList();
  return response;
});

export const projectStoreAsync = createAsyncThunk(
  "project/store",
  async ({ project }: { project: Project }) => {
    const response = await projectStore(project);
    return response;
  }
);

export const projectUpdateAsync = createAsyncThunk(
  "project/update",
  async ({ project }: { project: Project }) => {
    const response = await projectUpdate(project);
    return response;
  }
);

export const projectDeleteAsync = createAsyncThunk(
  "project/delete",
  async ({ project }: { project: Project }) => {
    const response = await projectDelete(project);
    return response;
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(projectListAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(projectListAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(projectListAsync.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(projectStoreAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(projectStoreAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(projectStoreAsync.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(projectStoreAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(projectStoreAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(projectStoreAsync.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(projectUpdateAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(projectUpdateAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(projectUpdateAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default projectSlice.reducer;
