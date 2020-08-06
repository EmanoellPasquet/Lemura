import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: visible;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 354px;
  height: 210px;
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  border-radius: 0 20px 0 20px;
  background-repeat: no-repeat;
  opacity:0.8;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0px;
  margin:50px 0px 50px 10px ;
  transition:  .3s ease-in-out;
  flex: 0 0 384px;
  z-index: 1;

  &:hover,
  &:focus {
   transform:scale(120%);
   z-index:5;
  border-radius: 20px 0px 20px 0px;
  opacity:1;
  box-shadow: 2px 2px 5px 2px #62D2F9;

  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
