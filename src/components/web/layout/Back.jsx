import './Back.scss';
export const Back = ({ back, handlePagesCount }) => {
	return (
		<div className={`back ${back}`} onClick={() => (back ? handlePagesCount(-1) : window.evg_assistant.close())}>
			<svg width="100%" viewBox="0 0 24 24" fill="none" color="white">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M3.356 7.349a1.235 1.235 0 011.72 0L12 14.126l6.924-6.777a1.235 1.235 0 011.72 0 1.173 1.173 0 010 1.683l-7.784 7.62A1.23 1.23 0 0112 17a1.23 1.23 0 01-.86-.349L3.356 9.032a1.173 1.173 0 010-1.683z"
					fill="currentColor"
				></path>
			</svg>
		</div>
	);
};
