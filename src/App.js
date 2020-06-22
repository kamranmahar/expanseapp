import React from 'react';

import './App.css';
//import Global Provider
import { GlobalProvider } from './Context/GlobalContext'

//import Components
import { Header}  from './Components/Header';
import { Balance}  from './Components/Balance';
import { Summary}  from './Components/Summary';
import { History}  from './Components/History';
import { Add}  from './Components/Add';
function App() {
  return (
    <GlobalProvider>
    <div className="main-container">
      <div className="body-container">
      <Header />
      <Balance />
      <Summary />
      <History />
      <Add />
    </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
