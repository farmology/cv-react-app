import React, { useState } from 'react';

function Display(props) {
  const {personal, updatePersonal} = props;

    function handleChange(e) {
        updatePersonal((prevState) => ({
          ...prevState,
          [e.target.id] : e.target.value
        }));
        console.log(e.target.id);
    };

  return (
    <div className="Display">
      <form>
        <label htmlFor='firstname'>First Name</label>
        <input onChange={handleChange} type="text" id="firstname" />
        <label htmlFor='lastname'>Last Name</label>
        <input onChange={handleChange} type="text" id="lastname" />
        <label htmlFor='email'>E-mail</label>
        <input onChange={handleChange} type="text" id="email"/>
        <label htmlFor='number'>Phone Number</label>
        <input onChange={handleChange} type="text" id="number"/>
        <label htmlFor='address'>Address</label>
        <input onChange={handleChange} type="text" id="address"/>
        
        <button type="submit">Submit</button>
      </form>
      

    </div>
  );
}

export default Display;