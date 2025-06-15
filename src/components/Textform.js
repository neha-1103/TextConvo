import React,{useState} from 'react'


export default function Textform(props) {
  const upper = () =>{
    console.log("The text is converted to uppercase.");
    let newtext = text.toUpperCase();
    settext(newtext);
  }
  const lower = () =>{
    console.log("The text is converted to uppercase.");
    let newtext = text.toLowerCase();
    settext(newtext);
  }
  const func2 = (event) =>{
    console.log('text is changed')
    settext(event.target.value)
  }
  const remove = (e) =>{
    settext("") 
  }
  const copy =()=>{
    var text = document.getElementById("box");
    text.select()
    navigator.clipboard.writeText(text.value)
  }
  
  const [text,settext] = useState('Enter the text')
  return (
  <div>
  <div className='container-fluid'  >
    <div className="mb-3 "  >
      <h1>Enter Your Text...  </h1>
      <textarea className="form-control  "  value={text} onChange={func2} style={{backgroundColor:props.mode==='dark'?'white':'grey',color:props.mode==='dark'?'white':'black'}} id="box" rows='8'></textarea>
      </div>
        <button className="btn btn-primary m-1" onClick={upper}>Convert to Uppercase</button>
        <button className="btn btn-primary m-1" onClick={lower}>Convert to lowercase</button>
        <button className='btn btn-primary m-1' onClick={remove}>Remove text</button>
        <button className='btn btn-primary m-1' onClick={copy}>Copy</button>

      </div>
    <div>
    <h7 className='container '>Your Summary</h7>
    <p className='container '> {text.split(" ").length} words and {text.length} characters</p>
    <p className='container '>{0.008* text.split(" ").length} minutes read</p>
  </div>
  
  </div>
  )
}
