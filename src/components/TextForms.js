import React,{useState} from 'react'

export default function TextForms(props) {
    const handleupClick = () =>{
        console.log("uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleloClick = () =>{
        console.log("uppercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event) =>{
        console.log("On change");
        setText(event.target.value);
    
    }
    const [text, setText] = useState('');
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn.btn-primary mx-2" onClick={handleupClick}>Convert to uppercase </button>
        <button className="btn.btn-primary mx-2" onClick={handleloClick}>Convert to lowercase </button>
    </div>
    <div className='container my-3'>
        <h2>your text summary</h2>
        <p>{text.split(" ").length} words and {text.length}characters</p>

    </div>
    </>
  
    )
}
