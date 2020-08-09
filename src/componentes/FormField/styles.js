import styled, { css } from "styled-components";

export const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }

  input[type='color'] {
    width: 100px;
    height: 100px; 
    border:none;
    margin-left:30%;
    box-sizing:border-box;
}
input[type='color']::-moz-color-swatch{
  border: none;
  border-radius: 50%;
  padding: 0;
}
input[type='color']::-moz-color-swatch-wrapper{
    border: none;
    border-radius: 50%;
    padding: 0;
}

input[type='color']::-webkit-color-swatch {
  border: none;
  border-radius: 50%;
  padding: 0;
}

input[type='color']::-webkit-color-swatch-wrapper {
    border: none;
    border-radius: 50%;
    padding: 0;
}
`;

export const Label = styled.label``;

Label.Text = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`;

export const Input = styled.input`
  background: transparent;
  color: #f5f5f5;
  height: 57px;
  font-size: 18px;
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: #62d2f9;
  }
  &:focus:not([type="color"]) + ${Label.Text} {
    transform: scale(0.7) translateY(-20px) translateX(-16px);
    color: #62d2f9;
  }
  ${({ value }) => {
    const hasValue = value.length > 0;

    return (
      hasValue &&
      css`
        &:not([type="color"]) + ${Label.Text} {
          transform: scale(0.7) translateY(-20px) translateX(-16px);
          color: #62d2f9;
        }
      `
    );
  }}
`;
