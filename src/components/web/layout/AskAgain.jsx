import './AskAgain.scss';

export const AskAgain = ({ text, isWrongActive }) => {
	return (
		<div className={`wrong_answer ${isWrongActive ? 'active' : ''}`}>
			<div className="wrong_answer_text">
				<span>{text[0]}</span>
				<span>{text[1]}</span>
			</div>
		</div>
	);
};
