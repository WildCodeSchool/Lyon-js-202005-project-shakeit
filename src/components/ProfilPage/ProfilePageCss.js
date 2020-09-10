import styled from "styled-components";

const ProfilePageCss = styled.div`
  .profilpage-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    font-size: 0.7em;
    margin-top: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button-submit {
    border-radius: 5px;
    background-color: #00b9cd;
    color: whitesmoke;
    border: 1px solid #00b9cd;
    font-weight: bold;
    padding: 5px;
    font-size: 14px;
    width: 150px;
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
    justify-content: center;
    align-items: center;
  }
  label {
    color: black;
    margin-right: 20px;
    margin-top: 10px;
  }
  .profil-box-bottom {
    margin-bottom: 80px;
  }
`;

export default ProfilePageCss;
