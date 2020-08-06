import React from 'react';
import styled from 'styled-components';

import Logo from '../../assets/img/Load.svg';

const Wrapper = styled.div`
  width: 200px;
  margin: 0 auto;
`;

function Load() {
  return (
    <Wrapper>
      <img alt="Load" src={Logo} />
    </Wrapper>
  );
}

export default Load;