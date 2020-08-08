import React  from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';



const Container = styled.ul`
  padding: 30px;
  margin: 0;
.slick-list {
   
    overflow: hidden;
    box-sizing:border-box;
  }
}
.slick-prev{
  left: 0px;
    height: 100%;
    &:before {
      transform: translate(-50%, -75%) rotate(45deg);
    }
    &:after {
      transform: translate(-50%, -25%) rotate(-45deg);
    }
}
.slick-next {
    right: 0px;
    height: 100%;
    &:before {
      transform: translate(-50%, -75%) rotate(-45deg);
    }
    &:after {
      transform: translate(-50%, -25%) rotate(45deg);
    }
  }
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform:initial;
    transition: all .3s;
    
    &:before,
    &:after {
      position: absolute;
      left: 50%;
      top: 50%;
      content: '';
      background-color: #62D2F0;
      display: block;
      height: 3rem;
      width: 1rem;
      opacity: 1;
      border-radius: 0.25rem;
      
    }
    &:hover{
      transform: scale(2);
    }
  }
  .slick-prev {
    left: 0;
    height:100%;
    left:-20px;
  }
  .slick-next {
    right: 0px;
    height: 100%;
    right:-50px;
  }
`;

const SliderComponent = styled(SlickSlider)`
  margin-bottom: 40px;
  .slick-arrow {
    &:before {
      color: #62D2F0;
    }
  }
`;

export const SliderItem = styled.li`
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


const Slider = ({ children }) => (
  
  <Container>
    <SliderComponent
      {...{
        dots: true,
        infinite: true,
        speed: 300,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
      }}
      
    >
      {children}
    </SliderComponent>
  </Container>
  
);

export default Slider;