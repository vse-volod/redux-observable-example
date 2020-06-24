import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ErrorDisplayContainer = styled.div`
  min-height: 70px;
`;

const ErrorMessage = styled.div`
  color: #761b18;
  background-color: #f9d6d5;
  border-color: #f7c6c5;
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  max-width: 100%;
`;

const useErrors = () => useSelector((state) => ({
  error: state.error,
}));

const ErrorDisplay = () => {
  const { error } = useErrors();
  return (
    <ErrorDisplayContainer>
      {error && (
        <ErrorMessage>
          {error}
        </ErrorMessage>
      )}
    </ErrorDisplayContainer>
  );
};

export default ErrorDisplay;
