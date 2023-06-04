import logo from './logo.svg';
import './App.css';
import Myheader from './Myheader';
import Myfriendslist from './Myfriendslist';

function App() {
  return (
    <div>
      <Myheader title="bsdf"></Myheader>

      <h1>Hello World !!!</h1>
      <Myfriendslist title="ms" color="red"></Myfriendslist>
    </div>
  );
}

export default App;
