import React from "react";

function WriteTag(props){

    return(
        <div>
        <button className="button-secondary pure-button" disabled="">{props.value}</button>
        </div>
    );

}
export default WriteTag;