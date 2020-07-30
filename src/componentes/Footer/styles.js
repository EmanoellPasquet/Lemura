import styled from 'styled-components';


export const FooterBase = styled.footer`
 background: linear-gradient( #000,#292929);
  border-top: 5px solid #62D2F9;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
