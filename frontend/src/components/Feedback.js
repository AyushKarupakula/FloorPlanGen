import React, { useState } from 'react';
import styled from 'styled-components';

const FeedbackContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-top: 1rem;
`;

const Input = styled.input`
  margin-top: 0.5rem;
  padding: 0.5rem;
`;

const TextArea = styled.textarea`
  margin-top: 0.5rem;
  padding: 0.5rem;
  height: 150px;
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

function Feedback() {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    // Here you would typically send the feedback to a server
    alert('Thank you for your feedback!');
    setFeedback({ name: '', email: '', message: '' });
  };

  return (
    <FeedbackContainer>
      <h1>Provide Feedback</h1>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            value={feedback.name}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Email:
          <Input
            type="email"
            name="email"
            value={feedback.email}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Message:
          <TextArea
            name="message"
            value={feedback.message}
            onChange={handleChange}
            required
          />
        </Label>
        <Button type="submit">Submit Feedback</Button>
      </Form>
    </FeedbackContainer>
  );
}

export default Feedback;
