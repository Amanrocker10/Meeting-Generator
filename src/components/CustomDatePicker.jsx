import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DatePickerInput = styled.input`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  padding: 0.5rem;
  width: 150px;
  outline: none;
  cursor: pointer;
`;

const DatePickerIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: #777;
  cursor: pointer;
`;

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <DatePickerContainer>
      <DatePickerInput
        type="text"
        value={selectedDate ? selectedDate.toLocaleDateString() : ''}
        readOnly
      />
      <DatePickerIcon>
        <i className="fas fa-calendar-alt"></i>
      </DatePickerIcon>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
        popperPlacement="bottom-start"
        popperModifiers={{
          flip: {
            behavior: ['bottom-start'],
          },
          preventOverflow: {
            enabled: false,
          },
          hide: {
            enabled: false,
          },
        }}
      />
    </DatePickerContainer>
  );
};

export default CustomDatePicker;