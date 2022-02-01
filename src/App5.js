import React from 'react';
// import { ThemeContext } from './hooks/useContextExample';
import ThemeContextProvider from './hooks/useContextExample';
import Home from './components/Home';


function App() {
  return <div>
      <ThemeContextProvider >
          <Home />
      </ThemeContextProvider>
  </div>;
}

export default App;
