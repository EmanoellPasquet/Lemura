import styled from "styled-components";

export const VideoCardContainer = styled.a`
  .titulo {
    display: flex;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    text-align: center;
    height: 60px;
    color: snow;
    padding: 10px;
    transform: translateY(92px);
    transition: transform linear .1s ;
    align-items: center;
    justify-content: center;
    opacity: 1;
  }
  &:hover .titulo,
  &:focus .titulo {
    transform: translateY(0);
    border-radius: 0px 0 20px 0px;
    opacity: 1;

  }

  display: flex;
  justify-content: center;
  align-items: flex-end;
  border: 2px solid;
  text-decoration: none;
  overflow: visible;
  cursor: pointer;

  width: 300px;
  height: 210px;
  background-image: ${({ url }) => `url(${url})`};
  background-position: center;
  border-radius: 0 20px 0 20px;
  background-repeat: no-repeat;
  opacity: 0.8;
  position: relative;
  margin: 30px 0px 30px 30px;
  transition: 0.3s ease-in-out;
  flex: 0 0 298px;
  z-index: 1;
  &:hover,
  &:focus {
    transform: scale(120%);
    z-index: 5;
    border-radius: 20px 0px 20px 0px;
    opacity: 1;
    /* box-shadow: 2px 2px 5px 2px #62d2f9; */
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;
