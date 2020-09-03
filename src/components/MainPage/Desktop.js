import styled from "styled-components";

const Desktop = styled.div`
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    grid-area: main;
    text-align: center;
    width: 100%;

    img {
      width: 250px;
      border-radius: 30% 15% / 10% 35%;
      box-shadow: 10px -8px rgba(0, 185, 205, 0.49);
    }
  }
`;

export default Desktop;
