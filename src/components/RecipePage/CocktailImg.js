import styled from "styled-components";

const CocktailImg = styled.img`
  width: 80%;
  max-width: 350px;
  margin: auto;
  display: flex;

  border-radius: 30% 15% / 10% 35%;
  box-shadow: 10px -8px rgba(0, 185, 205, 0.49);

  @media (min-width 769px) {
    margin: auto;
  }
`;

export default CocktailImg;
