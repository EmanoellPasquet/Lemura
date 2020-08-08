import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/img/Load2.svg';



const Wrapper = styled.div`
display:flex;
justify-content:center;
margin:20px;
flex-direction:column;
text-align:center;


`;

function Load() {
  return (
    <Wrapper>
      <img alt="Load" src={Logo} />
      <p>Carregando categorias, aguarde...</p>
    </Wrapper>
  );
}


export default Load;