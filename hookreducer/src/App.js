import logo from './logo.svg';
import React,{useReducer} from 'react';
import './App.css';
import Test from './Components/Test';
import CounterOne from './Components/CounterOne';
import CounterTwo from './Components/CounterTwo';
import CounterThree from './Components/CounterThree';
import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ComponentC from './Components/ComponentC';
import DataFechingOne from './Components/DataFechingOne';
import DataFechingTwo from './Components/DataFechingTwo';
export const CountContext = React.createContext();

const intialState = 0;
const reducer = (state,action) => {
    switch(action){
        case 'Increment':
            return state+1
        case 'Decrement':
            return  state-1
        case 'Reset':
            return intialState
        default:
            return state
    }
}
function App() {
  const [count,dispatch] = useReducer(reducer,intialState);
  return (
    <div className="App">
     {/* <CounterOne/> */}
     {/* <CounterTwo/> */}
     {/* <CounterThree/> */}
     {/* <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
       <ComponentA/>
       <ComponentB/>
       <ComponentC/>
     </CountContext.Provider> */}
     {/* <DataFechingOne/> */}
     <DataFechingTwo/>
    </div>
  );
}

export default App;
