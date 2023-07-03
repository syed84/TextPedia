import Navbar from "./components/navbar/Navbar"
import TextArea from "./components/textArea/TextArea"
import './App.css';
import { useState } from "react";
import Alert from "./components/alert/Alert";
// import About from "./components/about/About";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

const showAlert= (message, type) =>{
  setAlert ({
    msg: message,
    type: type
  })
  setTimeout(() => {
        setAlert(null);
  }, 1500);
}

const toggleMode = ( ) => {
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor= 'black'
    document.body.style.color= 'white'
    showAlert("Dark Mode enabled", "success")
    document.title = "TextPedia - Dark Mode"
    
  }
  else{
    setMode('light')
    document.body.style.backgroundColor= 'white'
    document.body.style.color= 'black'
    showAlert("Light Mode enabled", "success")
    document.title= "TextPedia - Light Mode" 
    
    
  }
  
}
// setInterval(() => {
//   document.title = "TextPedia is Awsome"
// }, 1000);
// setInterval(() => {
//   document.title = "Install TextPedia"
// }, 2000);
// setInterval(() => {
//   document.title = "TextPedia"
// }, 3000);


return (
  <>
 {/* <Router> */}
 <Navbar title="TextPedia" aboutText="About TextPedia" mode={mode} toggleMode={toggleMode} />
 <Alert alert={alert}/>
 <div className="container my-3">
      {/* <Switch> */}
        
        {/* <Route exact path="/"> */}
        <TextArea heading="Enter Text To Analyze" text="Enter Text Here" mode={mode} showAlert={showAlert} />
        {/* </Route>

        <Route exact path="/about">
          <About />
        </Route>

      </Switch> */}
 </div>
 {/* </Router> */}

  
</>
  );
}

export default App;
