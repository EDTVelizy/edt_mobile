/* eslint-disable no-param-reassign */
import { types } from 'mobx-state-tree';

const System = types
  .model({
    theme: types.enumeration(['light', 'dark']),
    automaticTheme: false,
  })
  .actions(self => ({
    setTheme(newTheme: 'light' | 'dark') {
      self.theme = newTheme;
      self.automaticTheme = false;
    },

    setThemeAutomatic() {
      self.automaticTheme = true;
    },
  }));

export default System;
