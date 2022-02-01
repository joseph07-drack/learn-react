import { useState, createContext } from "react";

const themes = {
    light: {
        foreground: '#f00',
        background: '#fff'
    },
    dark:{
        foreground: '#fff',
        background: '#222'
    }
}

export const ThemeContext = createContext()

// creating a customer context that we'll be accepting a Components as children
const ThemeContextProvider = ({children}) => {
    // to make our context customable, we will need 2 states, 1 for the theme, i.e #styles and another one for the #name (this will act as the key) of the theme or the active theme to keep track of the theme that has changed
    const [theme, setTheme] = useState(themes.light) // default theme
    const [activeTheme, setActiveTheme] = useState('light') // default active theme
    
    // when clicking the toggleTheme button, we'll need to change the theme and the activeTheme
    const toggleTheme = () => {
        // determine the next theme
        /**
         * if activeTheme is 'light' we set it to 'dark' otherwise(i.e if it's dark) we set it to 'light'
         */
        const nextTheme = activeTheme === 'light' ? 'dark' : 'light';
        // update the theme
        setTheme(themes[nextTheme]) // i.e themes['light'] or themes['dark']
        // update the the activeTheme
        setActiveTheme(nextTheme)
    }

    return( 
        <ThemeContext.Provider value={[theme, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider  