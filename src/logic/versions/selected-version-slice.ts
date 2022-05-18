import { createSlice } from '@reduxjs/toolkit';

export const selectedVersionSlice = createSlice({
  name: 'version',
  initialState: {},
  reducers: {
    updateSelection: (state, action) => {
      const { section, selection } = action.payload;

      state[section] = selection;
    },
  },
});

export const selectedVersionsSelector = (state) => state.versions.selected;

export const { updateSelection } = selectedVersionSlice.actions;
