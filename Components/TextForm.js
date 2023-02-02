import React ,{useState} from 'react'

export default function TextForm(props) {
    
  const handleOnChange=(event)=>{
     
      setText(event.target.value);
  }
  const handleOnClick=()=>{
  // console.log("Uppercase was clicked")
  // setText("you have clicked on convert");
  setText(text.toUpperCase());
  props.showAlert("The text is converted to upper case","success");
  
  }
  const handleOnClick2=()=>{
  // console.log("Uppercase was clicked")
  // setText("you have clicked on convert");
  setText(text.toLowerCase());
  props.showAlert("The text is converted to lower case","success");
  }
  const handleOnClick3=()=>{
  // console.log("Uppercase was clicked")
  // setText("you have clicked on convert");
  setText("");
  props.showAlert("The text is cleared","success");
  }
  const handleOnCllick4=()=>{
        //var a=document.getElementById("mybox");
        // a.select();
        //navigator.clipboard.writeText(a.value);
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("The text is copied","success");
  }
  const [text,setText]=useState("");
    //text="new text"; // wrong way
    //setText("new text"); // right way
  return (<>

  
    <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
    
<div className="mb-3" >
    <h1>{props.heading}</h1>
 
  <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"#37373c":"white",color:props.mode==="dark"?"white":"black"}} ></textarea>
  <button type="button" disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleOnClick}>Convert to Uppercase</button>
  <button type="button" disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleOnClick2}>Convert to Lowercase</button>
  <button type="button" disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleOnClick3}>Clear Text</button>
  <button type="button" disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleOnCllick4}>Copy Text</button>
</div>
    </div>
    <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
      <h1>Your text summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{
          return element.length!==0;
      }).length} words and {text.length} characters</p>
      <p> {0.008 * text.split(/\s+/).filter((element)=>{
          return element.length!==0;
      }).length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length<1?"Enter something to preview":text}</p>
    </div>
    </>
  )
}
