import React from "react";
import styled, {css} from "styled-components";
import Menu from "../Menu";
import Footer from "../Footer";
// import styled from "styled-components";

const Main = styled.main`
  color: #fff;
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  color: #62d2f9;
  ${({ paddingAll })=>css`
  padding:${paddingAll};
  `}
  
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>{children}</Main>
      <Footer />
    </>
  );
}

export default PageDefault;
