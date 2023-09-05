import { Cards } from '../firstPage/Cards';
import { Promo } from '../firstPage/Promo';
import './FirstPage.scss';

export const FirstPage = ({ handlePagesCount }) => {
	return (
		<div className="first_page">
			<div className="wrapper">
				<Promo />
				<Cards handlePagesCount={handlePagesCount} />
			</div>
		</div>
	);
};
