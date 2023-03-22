import React, { useState } from 'react';

import './Form.scss';

const Form = (props) => {
  const [method, setMethod] = useState('GET');
  const { handleApiCall } = props;
  
  const HandleSubmit = (e) => {
    e.preventDefault();
  console.log(e.target);
    const formData = {
      method: method,
      url: e.target.url.value,
    };
    handleApiCall(formData);
  }


  
    return (
      <>
        <form onSubmit={HandleSubmit}>
          <label >
            <span>URL: </span>
            <input data-testid="url" name='url' type='text' />
            <button data-testid="go" id="go"type="submit">GO!</button>
          </label>
          <label id="jsonForm">
            <textarea rows="4" cols="50"> Enter JSON for PUT/POST routes here</textarea>
          </label>
          <label className="methods">
            <span data-testid="get" onClick={(e) => setMethod(e.target.innerText)} id="get">GET</span>
            <span onClick={(e) => setMethod(e.target.innerText)} id="post">POST</span>
            <span onClick={(e) => setMethod(e.target.innerText)} id="put">PUT</span>
            <span onClick={(e) => setMethod(e.target.innerText)} id="delete">DELETE</span>
          </label>
        </form>
      </>
    );
  }

export default Form;
