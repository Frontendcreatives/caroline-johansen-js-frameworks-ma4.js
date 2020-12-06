import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function Src({ handleSrc }) {
	return (
		<InputGroup className="search">
			<FormControl placeholder="Search recipe..." onChange={event => handleSrc(event)} />
		</InputGroup>
	);
}

Src.propTypes = {
	handleSrc: PropTypes.func.isRequired
};

export default Src;