import styled from "styled-components";

const Header = styled.header`
  grid-area: head;
  display: flex;
  text-align: center;
  align-items: center;
  width: 90%;
  margin-left: 5%;
  margin-bottom: 10px;
  border-bottom: 2px solid #7ad1e0;

  img {
    position: relative;
    height: 90px;
    top: 15px;
  }
  button {
    position: relative;
    right: -40px;
  }
`;

export default Header;
