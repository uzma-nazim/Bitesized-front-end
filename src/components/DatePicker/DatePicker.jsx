import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComp = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
      <DatePicker
        selected={selectedDate}
        onChange={setSelectedDate}
        showTimeSelect
        dateFormat="dd MMM - dd MMM"
        timeCaption="time"
      />
  );
};

export default DatePickerComp;
