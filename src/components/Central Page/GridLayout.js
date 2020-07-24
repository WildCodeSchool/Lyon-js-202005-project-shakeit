import styled from "styled-components";

const GridLayout = styled.div`
  height: 100vh;
  margin: 0px 30px 0px 30px;
  display: grid;
  grid-template-areas:
    "head head head"
    "search search search"
    "main main main";

  grid-template-rows: 10% 25% 65%;
`;

export default GridLayout;