import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'


export default function TextForm(props) {

  const [myText, setMyText] = useState("")

  const toUppercase = ()=>{
    setMyText(myText.toUpperCase())
  }
  const toLowercase = ()=>{
    setMyText(myText.toLowerCase())
  }
  const changeText = (event)=>{
    setMyText(event.target.value)
  }
  const clearText = ()=>{
    setMyText("")
  }
  return (
    <div className="container my-3">
        <h3 className='my-3'>{props.Heading}</h3>
        <div className="mb-3">
            <textarea rows="5" className="form-control" id="formGroupExampleInput2" placeholder="Enter Your Text" onChange={changeText} value = {myText}/>
        </div>
        <button className="btn btn-primary" onClick={toUppercase}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={toLowercase}>Convert To Lowercase</button>
        <button className="btn btn-primary" onClick={clearText}>Clear</button>
        <div className="my-3">
          <span><strong>Word Count:</strong> {myText ? myText.split(" ").length : 0}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Character Count:</strong> {myText.length}</span>
        </div>
        <div className="my-3">
          <h3>Preview: </h3>
          <p>{myText}</p>
        </div>
    </div>
  )
}

TextForm.propTypes = {
    Heading: PropTypes.string.isRequired,
}