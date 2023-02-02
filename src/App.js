
import './App.css';
import TextForm from "./Components/TextForm";
import Navbar from "./Components/Navbar";
import About from './Components/About';
import {useState} from 'react';
import Alert from './Components/Alert';
// import { BrowserRouter as Router,
// Route, Routes , Link } from 'react-router-dom';
function App() {
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-primary");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-light");
  // }
  const toggleMode=(cls)=>{
    // removeBodyClasses();
    // document.body.classList.add("bg-"+cls)
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils-Light mode";
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor="#37373c";
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils-Dark mode";
    } 
  }
 return (
 <>
  {/* <Router> */}
<Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
{/* <Navbar /> */}

<div className="container my-3">

{/* <Routes>
<Route exact path="/about" element={<About  mode={mode}  />}>
            </Route>
         
          <Route exact path="/" element={ <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/> }>
          
          </Route>
        </Routes>
  */}
  {/* <About/> */}
  {/* <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/> */}
  <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
</div>
 {/* </Router> */}
  </>
 
  
 
  
  );
}

export default App;
