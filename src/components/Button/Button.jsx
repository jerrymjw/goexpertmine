import styled, { css } from "styled-components";

const Button = styled.button`
  border: 1px solid transparent;
  outline: 0;
  background: transparent;
  font-size: 18px;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 5px;
  letter-spacing: 1px;

  ${({ variant }) => {
    switch(variant) {
      case 'primary':
        return css`
            color: white;
            background-color: black;
            border-color: black;

            &:hover {
                background-color: #69B1BB;
                border-color: #69B1BB;
            }
        `;

      case 'secondary':
        return css`
            color: black;
            background-color: white;
            border-color: black;

            &:hover {
                color: #69B1BB;
                border-color: #69B1BB;
            }
        `;
      default:
        return``;
    }
  }}
`;

export default Button;
