import logo from './logo.svg';
import './App.css';
import {Greet} from './Components/greet';
import Welcome from './Components/welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick'; 
import ClassClick from './Components/ClassClick';
import Eventbind from './Components/eventbind';
// import Hello from './Components/Hello';
import UserGreetings from './Components/UserGreetings';
import ParentComponent from './Components/ParentComponent';
import NameList from './Components/NameList';
import StyleSheet from './Components/StyleSheet';
// import Inline from './Inline';
import './appStyle.css';
import styles from './appStyle.module.css'
import Form from './Form';
import LifeCycleA from './Components/LifeCycleA';
import Fragments from './Components/Fragments';
import Table from './Components/Table';
import PureComp from './Components/PureComponent';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import FriParentInput from './Components/FriParentInput';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErroBoundary from './Components/ErroBoundary';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import User from './Components/User';
import CounterRP from './Components/CounterRP';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './Components/UserContext';
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
     {/* <Message/>
      <Counter/> */}
      {/* <Counter/> */}
      {/* <ClassClick/>
      <FunctionClick/> */}
      {/* <Eventbind/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreetings/> */}
      {/* <NameList/> */}
      {/* <StyleSheet primary={true}></StyleSheet> */}
       {/* <Inline/> 
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Form/> */}
      {/* <LifeCycleA/> */}
      {/* <Fragments/> */}
      {/* <Table/> */}
      {/* <PureComp/> */}
      {/* <ParentComp></ParentComp> */}
      {/* <RefsDemo/> */}
      {/* <FocusInput/> */}
      {/* <FriParentInput/> */}
      {/* <PortalDemo/> */}
      {/* <ErroBoundary>
        <Hero heroName="Batman"></Hero>
        </ErroBoundary>
        <ErroBoundary>
          <Hero heroName="Superman"></Hero>
        </ErroBoundary>
        <ErroBoundary>
          <Hero heroName="Batman"></Hero>
        </ErroBoundary> */}
      {/* <ClickCounter name=''/>
      <HoverCounter name=''/> */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIn) => isLoggedIn? 'Yeabsira Mesfin Abera':'Guest'}/> */}
      {/* <CounterRP >
        {(count,incrementCount)=><ClickCounterTwo count={count} incrementCount={incrementCount}/>} 
        </CounterRP>
      <CounterRP>
      {(count,incrementCount)=><HoverCounterTwo count={count} incrementCount={incrementCount}/>}
      </CounterRP> */}
      <UserProvider value="Yeabsira">
        <ComponentC/>
      </UserProvider>
    </div>
  );
}

export default App;
