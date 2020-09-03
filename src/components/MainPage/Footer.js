import styled from "styled-components";

const Footer = styled.footer`
  @media (max-width: 768px) {
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
  }
  @media (min-width: 769px) {
    position: fixed;
    z-index: 1;
    padding: 15px;
    bottom: 0;
    width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: white;
    height: 100vh;
    border-top: solid 1px lightgrey;
    box-shadow: 0em 0 1em grey;
  }
`;

export default Footer;
