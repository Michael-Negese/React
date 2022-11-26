import './App.css';
import React from 'react';
import HookCounterONe from './Components/HookCounterONe';
import HookMouse from './Components/HookMouse';
import MouseContanier from './Components/MouseContanier';
import IntervalHookCounter from './Components/IntervalHookCounter';
import DataFetching from './Components/DataFetching';
import ComponentC from './Components/ComponentC';
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
     {/* <HookCounterONe/> */}
     {/* <HookMouse/> */}
     {/* <MouseContanier/> */}
     {/* <IntervalHookCounter/> */}
     {/* <DataFetching/> */}
     <UserContext.Provider value={'Yeabsira'}>
      <ChannelContext.Provider value={'Mesfin'}>
        <ComponentC/>
        </ChannelContext.Provider>
     </UserContext.Provider>
    </div>
  );
}

export default App;
