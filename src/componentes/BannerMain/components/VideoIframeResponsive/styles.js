import styled from "styled-components";

export const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width:100%;
  padding-top: 50.25%;
  border: 2px solid #62d2f9;
  border-radius: 10px;
transition:0.3s;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: 0.3s ease-in-out;
  ${VideoContainer}:hover & {
    transform: scale(1.2) rotate(3deg);
  }
`;
