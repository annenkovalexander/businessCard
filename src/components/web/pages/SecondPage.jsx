import { SecondPageCards } from '../secondPage/SecondPageCards';
import { NextPage } from '../layout/NextPage';
import './SecondPage.scss';

export const SecondPage = ({ handlePagesCount }) => {
	return (
		<div className="second_page">
			<div className="second_page__text_wrapper">
				<h2 className="bit_text">СберДруг</h2>
				<div className="colored text">Выбирайте удобный способ для работы со мной</div>
			</div>
			<SecondPageCards />
			<NextPage text={'Что важно знать?'} handlePagesCount={handlePagesCount} />
		</div>
	);
};
