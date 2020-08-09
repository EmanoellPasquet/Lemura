import styled from "styled-components";

export const Button = styled.button`
display:flex;
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
 transition:  .2s;
 margin-left:15px;
 background-color:#5d5d5d;
 @media(max-width:500px){

 }
&:hover,
&:focus {
background-color: #2C3440;
transform:scale(.99);
}
`;

export const DeleteButton = styled(Button)`
display:flex;
width:60px;
padding:13px;
justify-content:center;
padding:0;
height:30px;
color:white;
background-color:#5d5d5d;
border:1px solid snow;
border-radius:5px;
transition:.3s ease-out;
&:focus,
&:hover{
 transform:scale(115%);
 opacity:0.8;
}
`;

