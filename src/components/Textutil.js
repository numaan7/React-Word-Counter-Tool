import React, { useState } from 'react'

function Textutil(props) {
  
  const [word, setWords] = useState('');


  function updateword() {
    words = document.getElementById('textarea').value

    var correctwords = words.charAt(0).toUpperCase() + words.slice(1)

    setWords(correctwords)
    wordtime()


  }
 

  function extraspaces() {

    let removedspace = word.replace(/\s+/g, ' ').trim();
    setWords(removedspace)
    props.showAlert("Extra spaces are now removed", "success");
  }


  console.log(word.charAt(0));
  function touppercase() {
    setWords(word.toUpperCase())
    props.showAlert('Your text is now converted to Uppercase', 'success')

    document.getElementById('textarea').style.textTransform = 'uppercase';

  }
  function tolowercase() {
    setWords(word.toLowerCase())
    document.getElementById('textarea').style.textTransform = 'lowercase';
    props.showAlert('Your text is now converted to Lowercase', 'success')
  }


  let words = word.split(' ')
 

  

  function wordtime(){
    let words = word.split(' ')
    let wt= words.length * 0.008 
    document.getElementById('wordtime').innerHTML=wt;
   

  }


  return (
    <div >
      <h3 className='p-3 m-3 mb-5 '><b>Words: {(words[0] === '' ? 0 : words.length)} Characters: {word.length} </b></h3>
      <span  className='m-3'>Time to read: <b id='wordtime'>0</b> minutes</span>
      <div className="m-3">

        <textarea onChange={updateword} value={word} className={`form-control border border-0  ${(props.mode === 'dark') ? 'bg-dark text-light' : 'bg-light'} `} id="textarea" rows="8"></textarea>
      </div>
      <div className="px-3">
        <button onClick={() => {
          navigator.clipboard.writeText(word);
          props.showAlert("Text is copied successfully", "success");
        }} className="btn btn-primary" type="button">Copy Text</button>
        <button onClick={touppercase} className="btn btn-primary mx-2" type="button">Convert Uppercase</button>
        <button onClick={tolowercase} className="btn btn-primary " type="button">Convert Lowercase</button>
        <button onClick={extraspaces} className="btn btn-primary mx-2" type="button">Remove extra spaces</button>
        <button onClick={() => {
          setWords('')
          props.showAlert("Text is cleared now!", "success");
        }} className="btn btn-danger" type="button">Clear text</button>
      </div>
      <div className={`p-3 m-3 rounded ${(props.mode === 'dark') ? 'bg-dark' : 'bg-light'}`} >
        <p className="text-start"><b>Preview:</b> {word}</p>
      </div>
    </div>
  )
}

export default Textutil;