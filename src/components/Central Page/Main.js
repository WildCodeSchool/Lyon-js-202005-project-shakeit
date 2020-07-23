import styled from "styled-components";

const Main = styled.div`
  grid-area: main;
  
  
  display:flex;
  flex-direction:column;
  overflow-y: scroll;
  margin-bottom:100px;
  align-items:center;

  .cocktailList {
display:flex;
flex-direction:column;
align-items:center;
margin-top:30px;




  };

  .cocktailInfos {
    display:flex  ;
flex-direction:row;
justify-content:space-around;
align-items:center;

};

.cocktailTitle {
flex:3;
margin-right:70%;
};

.cocktailRate {
flex:1;
display:flex;
margin-right:30%;



};

.clickable {
flex:1;
  

};





  
`;

export default Main;
