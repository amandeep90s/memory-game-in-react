import PropTypes from 'prop-types';
import React from 'react';

const MemoryCard = ({ handleClick }) => {
	const emojiArray = ['🐶', '🐷', '🐙', '🐛', '🐵', '🐶', '🐷', '🐙', '🐛', '🐵'];

	const emojiEl = emojiArray.map((emoji, index) => (
		<li key={`item-${index}-${emoji}`} className='card-item'>
			<button className='btn btn--emoji' onClick={handleClick}>
				{emoji}
			</button>
		</li>
	));

	return <ul className='card-container'>{emojiEl}</ul>;
};

MemoryCard.propTypes = {
	handleClick: PropTypes.func.isRequired,
};

export default MemoryCard;
