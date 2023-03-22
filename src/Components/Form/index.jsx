import React, { useState } from 'react';

import './Form.scss';

const Form = (props) => {
  const [method, useMethod] = useState('GET');
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
            <input name='url' type='text' />
            <button id="go"type="submit">GO!</button>
          </label>
          <label className="methods">
            <span id="get">GET</span>
            <span id="post">POST</span>
            <span id="put">PUT</span>
            <span id="delete">DELETE</span>
          </label>
        </form>
      </>
    );
  }

export default Form;
