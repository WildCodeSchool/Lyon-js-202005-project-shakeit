import React from 'react';

const Navbar = () => {
    return (
        <>
            <i className="fa fa-2x fa-refresh" aria-hidden="true"></i>
            <i className="fa fa-2x fa-list" aria-hidden="true"></i>
            <i
            className=" clickable  fa-2x fa fa-heart"
            aria-hidden="true"
            value="test"
            ></i>
            <i className="fa fa-2x fa-user" aria-hidden="true"></i>
            {/* <i class="fa fa-2x fa-bars" aria-hidden="true"></i> */}
        </>
    )
}

export default Navbar;