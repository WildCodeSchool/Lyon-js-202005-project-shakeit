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

input{
  background-color: white;
}
`;

export default Global;