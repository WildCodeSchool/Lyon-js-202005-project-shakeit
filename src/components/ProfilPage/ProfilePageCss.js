import styled from "styled-components";

const ProfilePageCss = styled.div`
  h1 {
    text-align: center;
  }
  .profilpage-box {
    display: flex;
    justify-content: space-around;
    margin-left: 10px;
    font-size: 0.7em;
    margin-bottom: 40px;
  }

  button {
    border-radius: 5px;
    background-color: #009ce7;
    color: whitesmoke;
    border: 1px solid #009ce7;
    font-weight: bold;
    padding: 5px;
    font-size: 14px;
    margin-left: 80px;
  }
  h2 {
    margin-left: 50px;
    color: #009ce7;
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
`;

export default ProfilePageCss;
