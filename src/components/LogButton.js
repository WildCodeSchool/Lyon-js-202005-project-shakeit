import styled from "styled-components";

const LogButton = styled.button`
  border-radius: 5px;
  background-color: #182026;
  color: whitesmoke;
  border: 1px solid #182026;
  font-weight: bold;
  padding: 5px;
  font-size: 14px;

  margin-left: ${(props) => props.marginleft + "px"};
  width: ${(props) => +props.width + "px"};
`;

export default LogButton;
