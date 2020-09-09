import styled from "styled-components";

const LogPage = styled.div`
  color: black;

  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
  .img-container-log {
    display: flex;
    flex-direction: column;
    align-items: center;
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
