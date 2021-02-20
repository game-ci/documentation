import { MenuStructure } from '@/tools/menu/menu-structure';
import { createSlice } from '@reduxjs/toolkit';
import menuStructure from '@/core/menu-structure.json';

export const selectedVersionSlice = createSlice({
  name: 'version',
  initialState: { ...MenuStructure.getCurrentVersions(menuStructure) },
  reducers: {
    updateSelection: (state, action) => {
      const { section, selection } = action.payload;

      state[section] = selection;
    },
  },
});

export const selectedVersionsSelector = (state) => state.versions.selected;

export const { updateSelection } = selectedVersionSlice.actions;
