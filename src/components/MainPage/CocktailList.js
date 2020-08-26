import styled from "styled-components";

const CocktailList = styled.div`
  @media (max-width: 768px) {
    grid-area: main;
    width: 100%;

    img {
      width: 90%;
      margin-top: 10px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export default CocktailList;
