import React from 'react';
import styled from 'styled-components';
import Logo from '../../../assets/img/Load2.svg';



const Wrapper = styled.div`
width:100%;
height:100vh;

`;

function LoadSecond() {
  return (
    <Wrapper>
      <img alt="Load" src={Logo} />
    </Wrapper>
  );
}


export default LoadSecond;