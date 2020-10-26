import React from 'react';
import { AppContext } from './contexts/authContext';
import Routes from './routes';

function App() {
  const [isAuthenticated, userHasAuthenticated] = React.useState(false);

  return (
    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Routes />
    </AppContext.Provider>
  );
}

export default App;
