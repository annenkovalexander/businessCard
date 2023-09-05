import './NextPage.scss';
export const NextPage = ({ text, handlePagesCount }) => {
	return (
		<div className="next_page" onClick={() => handlePagesCount(1)}>
			<div className="next_page_icon">
				<img src="https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/next_page.png" alt={text} />
			</div>
			<div className="next_page_text">{text}</div>
		</div>
	);
};
