import styled from "styled-components";

const CocktailList = styled.div`
  @media (max-width: 768px) {
    grid-area: main;
    width: 100%;
    text-align:center;

    img {
      width: 90%;
      margin-top: 10px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      border-radius: 30% 15% / 10% 35%;
      box-shadow: 10px -8px #7ad1e03b;
    }
  }
`;

export default CocktailList;
