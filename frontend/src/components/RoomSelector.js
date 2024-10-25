import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  margin-top: 1rem;
`;

const Input = styled.input`
  margin-top: 0.5rem;
  padding: 0.5rem;
`;

const Select = styled.select`
  margin-top: 0.5rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

function RoomSelector({ onGenerate }) {
  const [preferences, setPreferences] = useState({
    roomCount: 2,
    style: 'modern',
    squareFootage: 1000,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(preferences);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Number of Rooms:
        <Input
          type="number"
          name="roomCount"
          value={preferences.roomCount}
          onChange={handleChange}
          min="1"
          max="10"
        />
      </Label>
      <Label>
        Style:
        <Select name="style" value={preferences.style} onChange={handleChange}>
          <option value="modern">Modern</option>
          <option value="traditional">Traditional</option>
          <option value="minimalist">Minimalist</option>
        </Select>
      </Label>
      <Label>
        Square Footage:
        <Input
          type="number"
          name="squareFootage"
          value={preferences.squareFootage}
          onChange={handleChange}
          min="500"
          max="5000"
          step="100"
        />
      </Label>
      <Button type="submit">Generate Layout</Button>
    </Form>
  );
}

export default RoomSelector;
