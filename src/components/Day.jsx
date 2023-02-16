import React from 'react'

const Day = ({date}) => {
 
    const myDate = new Date(date);
    const dayOfWeek = myDate.getDay();
    const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekday = weekdayNames[dayOfWeek];
    return (
      <div>
        {weekday}
      </div>
    );
}

export default Day