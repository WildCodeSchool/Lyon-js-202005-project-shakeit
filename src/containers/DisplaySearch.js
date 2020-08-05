import React, {useState} from "react";
import 'font-awesome/css/font-awesome.min.css';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import liste_ingredient from './liste_ingredient.js';


function DisplaySearch(){
  function handleChange({target}){
    setInputValue(target.value);
}

const[tag, setTag] = useState([]);
const[tagList,setTagList]=useState('');
const tagAPI=liste_ingredient;
const [value, setValue] = useState([]);
const [inputValue, setInputValue] = useState('');
function Test() {


  return (
    <div>
      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={tagAPI.map(option => option.ingredient)}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" variant="outlined" />}
      />
    </div>
  );
}

// function handleClick(){
// setTag(tag=>tag.concat(tagList));
// console.log(tag);
// }

function handleClick(){
  setValue(value=>value.concat(inputValue));
  console.log(value);
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
    {/* <DisplaySearch   />   */}
    <Test />
    <button className="fa fa-2x fa-plus" aria-hidden="true" onClick={handleClick}>
    </button> 
    </div>
</div>
<div id="searchTags">
    <ul>
        {value.map((item, i) => (
          <Search
          inputValue={item}
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