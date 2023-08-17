import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'system',
  onChangeTheme: (theme: string) => void,
});

function ThemeContextProvider({ children: any }) {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    console.log('useEffect: ', theme);
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [theme]);

  const onChangeTheme = (theme: string) => {
    setTheme(theme);
    if (theme === 'system') {
      localStorage.removeItem('theme');
      return;
    }
    localStorage.setItem('theme', theme);
    return;
  };

  return (
    <ThemeContext.Provider value={{ theme, onChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
