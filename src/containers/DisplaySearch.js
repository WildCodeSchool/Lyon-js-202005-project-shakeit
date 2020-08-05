import React, {useState} from "react";
import 'font-awesome/css/font-awesome.min.css';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import liste_ingredient from './liste_ingredient.js';

function DisplaySearch(){
const [value, setValue] = useState([]);
const [inputValue, setInputValue] = useState('');
const Search = ({ value }) => 
(<button className="button-secondary pure-button" disabled="">{value}</button>)
        return (
          <div>
          <div className="searchBar">
            <Autocomplete
              value={inputValue}
              onChange={(event, newValue) => {
                setInputValue(newValue);
              }}
              options={liste_ingredient.map(option =>option.ingredient)}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Search ingredient" variant="outlined" />}
            />
            <i onClick={() =>{
              setValue(value => value.concat(inputValue));
              console.log(value);}
            } className="fa fa-2x fa-plus" aria-hidden="true"></i>
            </div>
            <div>
            <ul>
            {value.map((item, i) => (
           <Search
          value={item}
          key={item}
          />
        ))}
            </ul>
            </div>
          </div>
        );
      }
export default DisplaySearch;