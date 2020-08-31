import styled from "styled-components";
import img from "../img/accueil.jpg"

const LogPage = styled.div`

background-image: url(${img});
background-size:cover;
background-position:top ;
width:375px;
height:812px;
color:white;

input,button {
    border-radius:7px;
    margin-top:50px;    
}

input,label,input {
    margin-left:35px;
}


.labelForm{
margin-top:350px;
}

.inputForm{
    margin-top:350px;
}









`;

export default LogPage;