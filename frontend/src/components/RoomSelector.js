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

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ErrorMessage = styled.p`
  color: #dc3545;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

function RoomSelector({ onGenerate }) {
  const [preferences, setPreferences] = useState({
    roomCount: 2,
    style: 'modern',
    squareFootage: 1000,
    openPlan: false,
    features: [],
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'features') {
        setPreferences(prev => ({
          ...prev,
          features: checked
            ? [...prev.features, value]
            : prev.features.filter(feature => feature !== value)
        }));
      } else {
        setPreferences(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setPreferences(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (preferences.roomCount < 1 || preferences.roomCount > 10) {
      newErrors.roomCount = 'Room count must be between 1 and 10';
    }
    if (preferences.squareFootage < 500 || preferences.squareFootage > 5000) {
      newErrors.squareFootage = 'Square footage must be between 500 and 5000';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onGenerate(preferences);
    }
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
        {errors.roomCount && <ErrorMessage>{errors.roomCount}</ErrorMessage>}
      </Label>
      <Label>
        Style:
        <Select name="style" value={preferences.style} onChange={handleChange}>
          <option value="modern">Modern</option>
          <option value="traditional">Traditional</option>
          <option value="minimalist">Minimalist</option>
          <option value="industrial">Industrial</option>
          <option value="rustic">Rustic</option>
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
        {errors.squareFootage && <ErrorMessage>{errors.squareFootage}</ErrorMessage>}
      </Label>
      <CheckboxLabel>
        <input
          type="checkbox"
          name="openPlan"
          checked={preferences.openPlan}
          onChange={handleChange}
        />
        Open Plan Layout
      </CheckboxLabel>
      <Label>
        Features:
        <CheckboxGroup>
          {['Home Office', 'Balcony', 'Fireplace', 'Walk-in Closet'].map(feature => (
            <CheckboxLabel key={feature}>
              <input
                type="checkbox"
                name="features"
                value={feature}
                checked={preferences.features.includes(feature)}
                onChange={handleChange}
              />
              {feature}
            </CheckboxLabel>
          ))}
        </CheckboxGroup>
      </Label>
      <Button type="submit">Generate Layout</Button>
    </Form>
  );
}

export default RoomSelector;
