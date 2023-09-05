import './SecondPageCard.scss';
export const SecondPageCard = ({ text, background }) => {
	return (
		<button className="second_page__card" style={{ background }}>
			<span className="second_page__card_text">{text}</span>
		</button>
	);
};
