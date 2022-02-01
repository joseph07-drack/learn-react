import React, { useContext } from 'react';
import { ThemeContext } from '../hooks/useContextExample'

function Home() {
    const [theme, toggleTheme] = useContext(ThemeContext)
    console.log('Theme', theme)
  return <div>
      <h1 style={{background : theme.background, color: theme.foreground}}>This is Home Page For all Feeds</h1>
      <button onClick={toggleTheme}>Toggle theme</button>
  </div>;
}

export default Home;
