import styled from "styled-components";


const Test = styled.div`
#imgTurn {
    width:50px;
    margin: 15%;
    animation: tourne 2s linear 0s infinite;
    cursor:pointer;      
    }    
    #imgTurn:hover{
    animation: tourne 0.5s reverse linear 0s infinite;
    
    }
@keyframes tourne {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
    }
`;

export default Test;