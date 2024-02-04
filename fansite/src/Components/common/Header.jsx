import styled from 'styled-components';
import React from 'react';
import '../../App.css';

function Header() {
	return (
		<Container>
			<ListWrapper>
				<List>유재석</List>
				<List>하하</List>
				<List>주우재</List>
				<List>이이경</List>
				<List>박진주</List>
				<List>이미주</List>
			</ListWrapper>
		</Container>
	);
}

const Container = styled.header`
	background-image: url(${process.env.PUBLIC_URL}/programBN.png);
	background-size: auto;
	height: 280px;
`;

const ListWrapper = styled.ul`
	display: flex;
	position: absolute;
	justify-content: space-between;
	left: 50%;
	top: 20%;
	transform: translate(-50%, -50%);
	border-radius: 3px;
	box-shadow: 0 0 8px 1px #e9e9ec;
	list-style: none;
	width: 1000px;
	padding: 1rem;
	background-color: #f8f8ff;
`;

const List = styled.li`
	font-size: 21px;
	font-weight: 700;
	font-family: 'BookkGothic-Bd';
	border-radius: 5px;
	width: 7.7rem;
	height: 2rem;
	line-height: 1.5;
	padding: 0.3rem;
	text-align: center;
	background-color: black;
	color: #f5f5f5;
	user-select: none;
	cursor: pointer;
	&:hover {
		/* background-color: #8222b3; */
		background-color: purple;
		transition: all 0.5s;
		color: #f5f5f5;
	}
`;

export default Header;
