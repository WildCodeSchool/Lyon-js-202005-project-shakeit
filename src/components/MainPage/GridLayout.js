import styled from "styled-components";

const GridLayout = styled.div`
  height: 100vh;
 
  display: grid;
  grid-template-areas:
    "head head head"
    "search search search"
    "main main main";

  grid-template-rows: 10% 25% 65%;


  @media (max-width: 768px) {
    grid-template-areas : "head"
                          "search"
                          "main"
  }
`;

export default GridLayout;