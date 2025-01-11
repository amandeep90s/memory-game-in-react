import React, { useState } from 'react';

import Form from './components/Form';
import MemoryCard from './components/MemoryCard';

const App = () => {
	const [isGameOn, setIsGameOn] = useState(false);
	const [emojisData, setEmojisData] = useState([]);

	const startGame = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('https://emojihub.yurace.pro/api/all/category/animals-and-nature');
			if (!response.ok) {
				throw new Error('Could not fetch data from API');
			}

			const data = await response.json();
			const dataSlice = getSliceData(data);
			const emojisArray = getEmojisArray(dataSlice);

			setEmojisData(emojisArray);
			setIsGameOn(true);
		} catch (error) {
			console.error(error);
			setIsGameOn(false);
		}
	};

	const getSliceData = (data) => {
		const randomIndices = getRandomIndices(data);

		const dataSlice = randomIndices.map((index) => data[index]);

		return dataSlice;
	};

	const getRandomIndices = (data) => {
		const randomIndicesArray = [];

		while (randomIndicesArray.length < 10) {
			const randomNum = Math.floor(Math.random() * data.length);
			if (!randomIndicesArray.includes(randomNum)) {
				randomIndicesArray.push(randomNum);
			}
		}

		return randomIndicesArray;
	};

	const getEmojisArray = (data) => {
		const pairedEmojisArray = [...data, ...data];

		for (let index = pairedEmojisArray.length - 1; index >= 0; index--) {
			const j = Math.floor(Math.random() * (index + 1));
			const temp = pairedEmojisArray[index];
			pairedEmojisArray[index] = pairedEmojisArray[j];
			pairedEmojisArray[j] = temp;
		}

		return pairedEmojisArray;
	};

	function turnCard() {
		console.log('Memory card clicked');
	}

	return (
		<main>
			<h1>Memory</h1>
			{!isGameOn && <Form handleSubmit={startGame} />}
			{isGameOn && <MemoryCard handleClick={turnCard} data={emojisData} />}
		</main>
	);
};

export default App;
