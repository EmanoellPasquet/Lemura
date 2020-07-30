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
  background-size: cover;
  background-position: center;
  border-radius: 0 50px 0 50px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  margin:10px 0 10px 10px;
  transition: transform .3s;

  &:hover,
  &:focus {
    transform: scale(1.05);
  
 
 
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
