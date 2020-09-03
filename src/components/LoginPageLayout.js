import styled from "styled-components";
import img from "../img/accueil.jpg";

const LogPage = styled.div`
  color: black;

  form {
    display: flex;
    flex-direction: column;
    height: 70vh;
    align-items: center;
    justify-content: flex-end;
  }

  input,
  button {
    border-radius: 7px;
    margin-top: 50px;
  }

  label {
    margin-right: 10px;
  }

  input {
    width: 200px;
    box-shadow: 0em 0 1em grey;
  }
`;

export default LogPage;
