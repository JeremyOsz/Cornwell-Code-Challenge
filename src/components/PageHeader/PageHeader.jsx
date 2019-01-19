import styled from 'styled-components';

export default styled.h1`
	color: #000;
	font-family: Lato-Black;
	font-size: 2.5rem;
	text-transform: uppercase;
	letter-spacing: 2px;
	text-align: center;
	margin: auto;
	width: fit-content;
	padding: 2rem 1.5em;
	position: relative;

	&::after, &::before{
		content: ' ';
		height: 4px;
		background: #000;
		margin: auto;
		position: absolute;

		top: 0;
		bottom: 0;
		width: 50%;
		transform: translateY(-50%);
	}
	&::before{
		right: 100%;
	}
	&::after{
		left: 100%;
	}

`;
