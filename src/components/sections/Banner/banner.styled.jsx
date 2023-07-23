import styled from "styled-components";

export const BannerContainer = styled.div`

    
	width: 100%;
	min-height: 95vh;
	padding: 1rem;

	background-image: ${({ bgImage }) =>
		`url(/assets/images/banners/${bgImage}.png)`};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	transition: background-image 0.8s ease-in;
	


	@media (max-width: 460px) {
		min-height: 80vh;
	}

	.content-text {
		width: 40vw;

		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;

		text-align: center;
		color: ${({ theme }) => theme.colors.main};

		@media (max-width: 1000px) {
			width: 80vw;
		}

		@media (max-width: 700px) {
			width: 90vw;
		}

		@media (max-width: 500px) {
			width: 100%;
		}

		.text-primary, .text-sub {
			display: block;
			text-align: center;
		  }
		  
		  .text-primary{
			text-transform: uppercase;
			letter-spacing: 35px;
			font-size: 2em;
			animation: moveLeft 1.5s ease-in;
		  }
		
		  .text-sub {
			color: #D7D7D9;
			letter-spacing: 2px;
			font-size: 2em;
			animation: moveRight 1.5s ease-in;
			text-shadow: 0 0 5px white;
			direction: rtl; /* Add this line to set the text direction to right-to-left */
			unicode-bidi: bidi-override; /* Add this line to properly handle the directionality */
		}
		
		}
		
		@keyframes moveLeft {
		  0%{
			opacity: 0;
			transform: translatex(-100px);
		  }
		  80%{
			transform: translatex(10px);
		  }
		  100%{
			opacity:1;
			transform: translatex(0);
		  }
		}
		
		@keyframes moveRight {
		  0%{
			opacity: 0;
			transform: translatex(100px);
		  }
		   80%{
			transform: translatex(-10px);
		  }
		  100%{
			opacity:1;
			transform: translatex(0);
		  }
		}
		  
		  
		  

	
	}
`;

export const Points = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

export const Point = styled.button`
	background-color: ${({ theme, active }) =>
		active ? theme.colors.primary : theme.colors.main};
	border-radius: 50%;
	width: 1rem;
	height: 1rem;
	cursor: pointer;
	outline: 0.15em solid ${({ theme }) => theme.colors.dark};
`;
