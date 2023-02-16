import React from 'react'

function Time({ timestamp }) {
    const timeString = timestamp;
    
const parts = timeString.split(':'); // split the time string into an array of components

const hour = parts[0]; // get the hour component
const minute = parts[1]; // get the minute component

const formattedTime = `${hour}:${minute}`; 
    return (
      <>
        {formattedTime}
      </>
    );
  }
export default Time