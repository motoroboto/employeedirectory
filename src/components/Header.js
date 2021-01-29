import React from "react";
import '../styles/header.css';

const Header = (props) => {
    return (
    <nav className="navbar content-right">
        <h1>Employee Directory</h1>
        <form className="form-inline m-2 form-control-lg" onSubmit={props.handleFormSubmit}>
            <input
                className="form-control"
                value={props.value}
                name="search"
                onChange={props.handleInputChange}
                type="search"
                placeholder="Search"
            />
        </form>
    </nav>
    );
};

export default Header;