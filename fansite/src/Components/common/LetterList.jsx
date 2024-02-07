import React, { useEffect, useState } from 'react';
import Form from './Form';
import fakeData from '../common/Data/fakeData.json';
import LetterCard from './LetterCard';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function LetterList({ activeMember }) {
	const [comment, setComment] = useState([]);

	const filteredLetters = fakeData.filter((letter) => letter.writedTo === activeMember);
	console.log(filteredLetters);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('comments')) || fakeData;

		setComment(data);
	}, []);

	return (
		<LetterListWrap>
			{filteredLetters.map((letter) => (
				<LetterCard letter={letter} />
			))}
			{/* <LetterListUL>
				{comment.map((card) => (
					<Link to={`detail/${card.id}`} key={card.id}>
						<LetterCard id={card.id} nickname={card.nickname} createdAt={card.createdAt} writedTo={card.writedTo} content={card.content} />
					</Link>
				))}
			</LetterListUL> */}
		</LetterListWrap>
	);
}

const LetterListWrap = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const LetterListUL = styled.ul`
	display: flex;
	flex-direction: column;
	padding: 20px;
	width: 680px;
	border-radius: 5px;
	align-items: center;
	justify-content: center;
`;

export default LetterList;
