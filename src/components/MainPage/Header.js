import styled from "styled-components";

const Header = styled.header`
  grid-area: head;
  display:flex;
  text-align:center;
  align-items:center;
  margin-left: 0px;
  
  
  h1 {
      margin-top:50px;
      margin-left: 20px;
    }
    img{
      position: relative;
      height:100px;
      top: 20px;
    }
    button{
      position: relative;
      right: -40px;
    }
`;

export default Header;
