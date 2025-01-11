import PropTypes from 'prop-types';
import React from 'react';
import { decodeEntity } from 'html-entities';

const MemoryCard = ({ handleClick, data }) => {
	const emojiEl = data.map((emoji) => (
		<li key={emoji.name} className='card-item'>
			<button className='btn btn--emoji' onClick={handleClick}>
				{decodeEntity(emoji.htmlCode[0])}
			</button>
		</li>
	));

	return <ul className='card-container'>{emojiEl}</ul>;
};

MemoryCard.propTypes = {
	handleClick: PropTypes.func.isRequired,
	data: PropTypes.array.isRequired,
};

export default MemoryCard;
