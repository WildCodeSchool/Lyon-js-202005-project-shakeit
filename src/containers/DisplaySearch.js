import React, {useState} from "react";
import 'font-awesome/css/font-awesome.min.css';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

function DisplaySearch(){

const[tag, setTag] = useState([]);
const[tagList,setTagList]=useState('');

const tagAPI = [
  { ingredient: "vodka"},
  { ingredient: "rhum"},
  { ingredient: "lemon"},
  { ingredient: "orange juice"},
  { ingredient: "tequila"},
  { ingredient: "beer"},
  { ingredient: "icecubes"},
  { ingredient: "soda"},
];

function handleChange({target}){
    setTagList(target.value);
}




function AutoComplete() {
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        options={tagAPI.map(option => option.ingredient)}
        renderInput={params => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </div>
  );
}



function handleClick(){
setTag(tag=>tag.concat(tagList));
console.log(tag);
}

const Search = ({ tagList }) => 
(<button className="button-secondary pure-button" disabled="">{tagList}</button>)

return(
<>
<hr></hr>
<link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css" integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ" crossOrigin="anonymous"></link>
<div >
    <p className="search__title">Let's find cocktail</p>
    <div className="searchBar">
    <input className="search__input" type="text" placeholder="Search" onChange={handleChange} />
    <AutoComplete />  
    <button className="fa fa-2x fa-plus" aria-hidden="true" onClick={handleClick}>
    </button> 
    </div>
</div>
<div id="searchTags">
    <ul>
        {tag.map((item, i) => (
          <Search
          tagList={item}
          key={item}
          />
        ))}
      </ul>
</div> 
<hr></hr>
</>
);
};

export default DisplaySearch;

