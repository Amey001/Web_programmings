import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import Textbox from './components/Textbox';



function App() {
  return (
  <>  
  <Navbar title="AMSID" aboutus="About Us"/>
  <div className='container mx-3 my-3'>
  <Textbox />
    

  </div>
  
  </>
  );
}

export default App;




//what is props ?
// props is nothing but a properties if u made a component and you want to pass some things in it  we say that this is the component with some variables in it which i will tell what it will be is props

//props should not be changed they should be readonly
//

