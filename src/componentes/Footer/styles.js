import styled from "styled-components";

export const FooterBase = styled.footer`
  display: flex;
  align-items:center;

  flex-direction:column;
  background: linear-gradient(#000, #292929);
  border-top: 5px solid #62d2f9;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
