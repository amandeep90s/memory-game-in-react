import PropTypes from 'prop-types';
import React from 'react';

const RegularButton = ({ children, handleClick }) => {
	return (
		<button type='button' className='btn btn__text' onClick={handleClick}>
			{children}
		</button>
	);
};

RegularButton.propTypes = {
	children: PropTypes.node.isRequired,
	handleClick: PropTypes.func.isRequired,
};

export default RegularButton;
