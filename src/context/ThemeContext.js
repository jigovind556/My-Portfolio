// ThemeContext.js
import { createContext, useContext } from 'react';
import { defaultTheme } from './themeColors';

export const ThemeContext = createContext({
    theme : defaultTheme,
    setTheme : () =>{}
});

export const ThemeProvider = ThemeContext.Provider;
export default function useTheme(){
    return useContext(ThemeContext);
}