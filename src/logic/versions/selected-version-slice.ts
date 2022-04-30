import { createSlice } from '@reduxjs/toolkit';
import menuStructure from '@site/src/core/menu-structure';

export const selectedVersionSlice = createSlice({
  name: 'version',
  initialState: {
    selectedVersion: {menuStructure},
  },
  reducers: {
    updateSelection: (state, action) => {
      const { section, selection } = action.payload;

      state[section] = selection;
    },
  },
});

export const selectedVersionsSelector = (state) => state.versions.selected;

export const { updateSelection } = selectedVersionSlice.actions;
