import React, {useState} from "react";
import 'font-awesome/css/font-awesome.min.css';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import liste_ingredient from './liste_ingredient.js';

function ArbreTest(){
const [value, setValue] = useState([]);
const [inputValue, setInputValue] = useState('');
const Search = ({ value }) => 
(<button className="button-secondary pure-button" disabled="">{value}</button>)
function buttonFunction(){
        setValue(value => value.concat(inputValue));
        console.log(value);
}   
        return (
          <div>
            {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
            <div>{`inputValue: '${inputValue}'`}</div>
            <br /> */}
            <br />
            <br />
            <Autocomplete
              value={inputValue}
              onChange={(event, newValue) => {
                setInputValue(newValue);
              }}
              options={liste_ingredient.map(option =>option.ingredient)}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Controllable" variant="outlined" />}
            />
            <p>TEST DU BOUTON</p>
            <button onClick={buttonFunction}> TRY ME</button>
            <ul>
            {value.map((item, i) => (
          <Search
          value={item}
          key={item}
          />
        ))}
            </ul>
            
          </div>
        );
      }
export default ArbreTest;