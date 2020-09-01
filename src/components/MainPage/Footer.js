import styled from "styled-components";

const Footer = styled.footer`
  grid-area: footer;
  position: fixed;
  z-index: 1;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  height: 60px;
  border-top: solid 1px lightgrey;
  box-shadow: 0em 0 2em grey;
`;

export default Footer;
