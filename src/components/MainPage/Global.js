import { createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  :root {
      color: #3DE0D7;
    }
a {
    color: #3DE0D7;
}
h1 {
    text-align: center;
}

svg{
  margin-right: 5px;
}
label{
  color: #3DE0D7 !important;
}
`;

export default Global;