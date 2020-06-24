import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ErrorDisplayContainer = styled.div`
    color: #761b18;
    background-color: #f9d6d5;
    border-color: #f7c6c5;
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    min-height: 70px;
    flex: 0 0 100%;
    max-width: 100%;
`;

const useErrors = () => useSelector((state) => ({
  error: state.error,
}));

const ErrorDisplay = () => {
  const { error } = useErrors();
  console.log('error:', error);
  return (
    <ErrorDisplayContainer>
      {error}
    </ErrorDisplayContainer>
  );
};

export default ErrorDisplay;
