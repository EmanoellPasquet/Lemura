import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 350px;
  height: 220px;
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  border-radius: 0 50px 0 50px;
  opacity:0.7;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  margin:50px 0px 50px 30px ;
  transition:  .3s ease-in-out;


  &:hover,
  &:focus {
   transform:scaleX(105%) scaleY(120%);
  border-radius: 50px 0px 50px 0px;
  opacity:1;
  rotate:-1deg;
  box-shadow: 2px 2px 10px 5px #62D2F9;

  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
