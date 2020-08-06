import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/img/Load.svg';

const Wrapper = styled.div`
width:100%;
height:100vh;

`;

function Load() {
  return (
    <Wrapper>
      <img alt="Load" src={Logo} />
    </Wrapper>
  );
}

export default Load;