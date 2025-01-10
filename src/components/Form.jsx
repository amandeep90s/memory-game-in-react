import PropTypes from 'prop-types';
import React from 'react';
import RegularButton from './RegularButton';

const Form = ({ handleSubmit }) => {
	return (
		<form className='wrapper'>
			<RegularButton handleClick={handleSubmit}>Start Game</RegularButton>
		</form>
	);
};

Form.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
};

export default Form;
