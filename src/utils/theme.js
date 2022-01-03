export const switchTheme = (theme) => {
  window.document.documentElement.setAttribute( "theme", theme);
};

export const initTheme = () => {
  let theme = localStorage.getItem("theme");
  if (theme === null) {
    switchTheme("light");
    localStorage.setItem("theme", "light");
  }
  else {
    switchTheme(theme);
  }
};
