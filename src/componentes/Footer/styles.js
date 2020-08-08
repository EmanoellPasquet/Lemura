import styled from "styled-components";

export const FooterBase = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  background: linear-gradient(#3d3d3d, #2d2d2d);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
  margin-top: 25px;
  z-index: 200;
  bottom: 1px;
  border-top: 1px solid #5b6268;
  @media (max-width:600px){
    flex-direction:column;
    height:auto;
  }

  .github,
  .linkedin {
    transition: 0.3s ease-in-out;
  }
  .github:hover,
  .linkedin:hover {
    transform: scale(0.90);
    transition: 0.3s;
  }
  p{
    display:absolute;
  }
`;
