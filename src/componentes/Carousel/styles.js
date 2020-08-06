import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  transition:.2s ease-in-out;
  line-height: 1;
  border-radius: 0px 20px 0px 20px;
  &:hover{
  border-radius:20px 0px 20px 0px;
  box-shadow: 2px 2px 10px 5px #62D2F9;
  &:hover{
    color:gray;
    
    
  }

  }
 
  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;


export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition:  .3s;
  color:#62D2F9;
  &:hover,
  &:focus {
    color:gray;
    
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color:#FFF;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
  
`;
