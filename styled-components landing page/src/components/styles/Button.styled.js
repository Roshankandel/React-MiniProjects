import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  cursor: pointer;
  font-size: 15px;
  font-weight: Bold;
  font-weight: 10px;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin-right: 30px;
  margin-bottom: 30px;
  margin-top: 10px;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
