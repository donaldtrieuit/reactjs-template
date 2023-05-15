import { makeAutoObservable, reaction } from 'mobx';

const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const defaultTheme = localStorage.getItem('theme') || preferredTheme;

class ThemeStore {
  theme = defaultTheme;

  constructor() {
    makeAutoObservable(this);
    reaction(
      () => this.theme,
      (theme) => {
        localStorage.setItem('theme', theme);
      },
    );
  }

  setTheme(theme = 'dark' | 'light') {
    this.theme = theme;
  }
}

export default new ThemeStore();
