import logo from './logo.svg';
import './App.css';
import {Greet} from './Components/greet';
import Welcome from './Components/welcome';
import Message from './Components/Message';
// import Hello from './Components/Hello';
function App() {
  return (
    <div className="App">
     {/* <Welcome/>
     <Hello/> */}
     {/* <Greet Name="Bruce" marvelName="Spider Man">
      <p >Test One</p>
     
     </Greet>
     <Greet Name="Clark" marvelName="Iron Man"> </Greet>
     <Welcome Name="Clark" marvelName="Iron Man"></Welcome>
     <button>Action</button>
     <Greet Name="Diana" marvelName="Super Man"> </Greet> */}
     <Message/>
     
    </div>
  );
}

export default App;
