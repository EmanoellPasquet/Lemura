import React from 'react';
import Menu from '../Menu'
import Footer from '../Footer'
import styled from 'styled-components';

const Main = styled.main`

    color: #FFF;
    flex:1;
    padding-top:50px;
    padding-left: 5%;
    padding-right:5%;
    color:#62D2F9;
`;


function PageDefault({children}){
   return(
      <>
         <Menu/>
         <Main>
            {children}
         </Main>
         <Footer/>
      </>
   );
}

export default PageDefault;