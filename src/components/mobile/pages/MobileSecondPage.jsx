import { useEffect } from 'react';
import { MobileNextPage } from '../MobileNextPage';
import './MobileSecondPage.scss';

export const MobileSecondPage = ({ handlePagesCount }) => {
	useEffect(() => {
		const el = document.getElementsByClassName('mobile_second_page')[0].parentNode;
		el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
	}, []);
	return (
		<div className="mobile_second_page">
			<h2>СберДруг</h2>
			<h2 className="colored">Выбирайте удобный способ для работы со мной</h2>
			<div className="mobile_second_page_wrapper">
				<div className="first_text_block">
					<div className="left">
						<span className="colored blue">Голосом</span>
					</div>
					<div className="right">
						<div className="top">
							<span className="colored">Вы говорите —</span>
							<span className="subtitle">я выполняю</span>
						</div>
						<div className="bottom">
							<span className="colored">Я говорю —</span>
							<span className="subtitle">Вы слушаете и отвечаете</span>
						</div>
					</div>
				</div>
				<div className="second_text_block">
					<span className="colored">Как с обычным приложением —</span>
					<span className="colored bold">нажатием на экран</span>
				</div>
				<div className="third_text_block">
					<span className="colored blue">Голосом</span>
					<span className="colored blue">и нажатием на экран</span>
				</div>
			</div>
			<MobileNextPage text={'Что важно знать?'} handlePagesCount={handlePagesCount} />
		</div>
	);
};
