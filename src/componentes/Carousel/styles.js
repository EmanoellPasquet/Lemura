import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  margin-bottom: 16px;
  display: inline-block;
  padding: 15px;
  border-left:10px solid #62D2F9;


  @media (max-width: 803px) {
    font-size: 24px;
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
     color:lightgray;
  
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
  flex-direction: row;

  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color:#FFF;
  min-height: 197px;
  margin-left: 0;
  margin-right:0;
  margin-bottom: 0;

  /* padding: 20px 40px;  */

  @media (max-width: 500px) {
		margin:0;
		min-height: 165px;
	}
  
`;
