import styled from 'styled-components';

export const Column = styled.div`
  flex: 1;
  padding: 0 15px;
`;

export const ListTitle = styled.h3`
  color: #95a5a6;
  font-weight: 400;
  font-size: 1.575rem;
  margin-bottom: 0.5rem;
  line-height: 1.2;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
`;

export const Item = styled.div`
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  &:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  &:last-child {
    margin-bottom: 0;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
`;

export const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 0.9rem;
  line-height: 1.6;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;
