import styled from 'styled-components';

 const TableStyle = styled.table`
width:100%;
margin-top:30px;
th{
   color:snow;
   border-bottom:1px solid ;
   font-size:32px;
   padding-bottom:10px;
   @media (max-width:800px){
   font-size:24px;
   }
}

.titulo{
   width:25%;
   text-align:left;
   padding-left:10px;
   
}
.subtitulo{
   text-align:left;
   padding-left:10px;
}
.cor{
   width:10%;
   text-align:left;
   padding-left:10px;
}

 td{
   padding:20px 10px ;
    border-bottom:1px solid ;
    @media (max-width:800px){
   font-size:12px;
   }
 }
`;

export default TableStyle;