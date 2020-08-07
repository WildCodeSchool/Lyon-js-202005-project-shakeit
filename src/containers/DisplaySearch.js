import React, {useState} from "react";
import 'font-awesome/css/font-awesome.min.css';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import liste_ingredient from './liste_ingredient.js';

function DisplaySearch(){
const [value, setValue] = useState([]);

const Search = ({ value }) => (<button className="button-secondary pure-button" disabled="">{value}</button>)


        return (
          <div className="searchBar">
            <Autocomplete
              onChange={(event, value) => setValue(value => value.concat(value))}
              multiple
              options={liste_ingredient}
              getOptionLabel={option => option.ingredient}
              style={{ width: 300 }}
              renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Ingrédients"
                placeholder="Choisissez vos ingrédients favoris"
              />)}
            />
            </div>
        );
      }
export default DisplaySearch;
