import React, { useState } from 'react';
import styled from 'styled-components';
import CustomDatePicker from './CustomDatePicker';
import TermsCheckbox from './TermsCheckbox';

const MeetingGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Input = styled.input`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  outline: none;
`;

const Button = styled.button`
  background-color: #0077ff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #0066cc;
  }
`;

const MeetingGenerator = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: null,
    termsAgreed: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleTermsChange = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      termsAgreed: !prevFormData.termsAgreed,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with the form data, like create a meeting
    console.log(formData);
  };

  return (
    <MeetingGeneratorContainer>
      <h1>Meeting Generator</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="date">Date</Label>
          <CustomDatePicker
            id="date"
            name="date"
            selected={formData.date}
            onChange={(date) =>
              setFormData((prevFormData) => ({
                ...prevFormData,
                date,
              }))
            }
            required
          />
        </FormGroup>
        <FormGroup>
          <TermsCheckbox
            id="termsAgreed"
            name="termsAgreed"
            checked={formData.termsAgreed}
            onChange={handleTermsChange}
            required
          />
        </FormGroup>
        <Button type="submit">Create Meeting</Button>
      </Form>
    </MeetingGeneratorContainer>
  );
};

export default MeetingGenerator
