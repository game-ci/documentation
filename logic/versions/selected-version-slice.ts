import { createSlice } from '@reduxjs/toolkit';
import menuStructure from '@/core/menu-structure.json';
import { getCurrentVersionsRecursively } from '@/tools/menu/get-current-versions-recursively';

export const selectedVersionSlice = createSlice({
  name: 'version',
  initialState: { ...getCurrentVersionsRecursively(menuStructure) },
  reducers: {
    updateSelection: (state, action) => {
      const { section, selection } = action.payload;

      state[section] = selection;
    },
  },
});

export const selectedVersionsSelector = (state) => state.versions.selected;

export const { updateSelection } = selectedVersionSlice.actions;
