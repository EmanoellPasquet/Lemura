import React from 'react';
import styled from 'styled-components';
import Logo from '../../../assets/img/Load2.svg';



const Wrapper = styled.div`
display:flex;
justify-content:center;
height:80vh;

`;

function LoadSecond() {
  return (
    <Wrapper>
      <img alt="Load" src={Logo} />
    </Wrapper>
  );
}


export default LoadSecond;