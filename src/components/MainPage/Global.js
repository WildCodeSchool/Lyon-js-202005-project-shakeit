import { createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
   
  }
  :root {
      background-color: #2b323c;
      color: #fff;
    }
a {
    color: #fff;
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