import logo from './logo.svg';
import './App.css';
import Myheader from './components/Myheader';
import Classcomponents from "./components/Classcomponents"


function App() {
  return(
    <div classname="myclass">
      <h1>Hello inside app.js</h1>
      <Myheader></Myheader>
      <h3>Welcome to reactjs</h3>
      <hr></hr>
      <Classcomponents></Classcomponents>
    </div>

  ); 
}

export default App;
