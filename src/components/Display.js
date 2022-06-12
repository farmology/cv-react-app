import React, { useState } from 'react';

function Display(props) {
  

    function handleChange(e) {
        props.updatePersonal({ firstname: e.target.value });
    };

  return (
    <div className="Display">
      <form>
        <label htmlFor='firstname'>First Name</label>
        <input onChange={handleChange} type="text" id="firstname"/>
        <label htmlFor='lastname'>Last Name</label>
        <input onChange={handleChange} type="text" id="lastname"/>
        <label htmlFor='email'>E-mail</label>
        <input type="text" id="email"/>
        <label htmlFor='number'>Phone Number</label>
        <input type="text" id="number"/>
        <label htmlFor='address'>Address</label>
        <input type="text" id="address"/>
        
        <button type="submit">Submit</button>
      </form>
      

    </div>
  );
}

export default Display;