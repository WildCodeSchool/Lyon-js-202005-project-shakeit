import styled from "styled-components";

const ProfilePageCss = styled.div`
  .profilpage-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
    font-size: 0.7em;
    margin-bottom: 40px;
  }

  .button-submit {
    border-radius: 5px;
    background-color: #00b9cd;
    color: whitesmoke;
    border: 1px solid #00b9cd;
    font-weight: bold;
    padding: 5px;
    font-size: 14px;
    margin-left: 80px;
    width: 140px;
  }
  h2 {
    margin-left: 50px;
    color: #00b9cd;
    text-decoration: none;
    font-size: 1.2em;
  }

  a {
    text-decoration: none;
  }

  .profilepage-arrow {
    display: flex;
    margin-left: 30px;
  }

  @media (min-width: 769px) {
    margin-left: 60px;

  }
`;

export default ProfilePageCss;
