import './MobileNextPage.scss';

export const MobileNextPage = ({ text, handlePagesCount }) => {
	return (
		<button className="mobile_next_page" onClick={() => handlePagesCount(1)}>
			<span>{text}</span>
		</button>
	);
};
