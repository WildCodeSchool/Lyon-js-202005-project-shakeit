import { createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
   
  }
  :root {
      background-color: #F2F2F9;
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
  color: #fff !important;
}
`;

export default Global;