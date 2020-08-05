import styled from "styled-components";

const Button = styled.button`
 color: #62D2F9;
 border: 1px solid #62D2F9;
 box-sizing: border-box;
 cursor: pointer;
 padding: 16px 24px;
 font-style: normal;
 font-weight: bold;
 font-size: 16px;
 outline: none;
 border-radius: 5px;
 text-decoration: none;
 display: inline-block;
 transition:  .3s;
 margin-left:15px;
 background-color:transparent;


&:hover,
&:focus {
background-color: #2C3440;
}`;

export default Button;
