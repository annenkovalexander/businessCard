import { useEffect } from 'react';
import { sendAE } from '../../../utils/utils';
import { MobileNextPage } from '../MobileNextPage';
import './MobileFourthPage.scss';

export const MobileFourthPage = ({ handlePagesCount }) => {
	useEffect(() => {
		const el = document.getElementsByClassName('mobile_fourth_page')[0].parentNode;
		el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
	}, []);

	return (
		<div className="mobile_fourth_page">
			<h2>СберДруг</h2>
			<h2 className="colored">Чем я могу быть полезен?</h2>
			<div className="mobile_fourth_page_wrapper">
				<div className="text_wrapper_first">
					<span className="white_text">
						<span>Помогу в рабочих и</span>
						<span>личных задачах</span>
					</span>
					<div onClick={() => sendAE('catalog', 'some paramter')}>
						<div className="icon_with_text">
							<img
								src="https://cdn.sberdevices.ru/temp/sberfriend/Helpful/Icon_26.png"
								alt="расскажи о навыках"
							/>
							<span>СберДруг,</span>
						</div>
						<span>
							расскажи о <span className="colored">навыках</span>
						</span>
					</div>
				</div>
				<div className="text_wrapper_second">
					<span>или Расскажи</span>
					<span>
						<span className="colored">новости</span> о себе
					</span>
					<span className="subtitle">{'(скоро)'}</span>
				</div>
				<img
					className="news_img"
					src="https://cdn.sberdevices.ru/temp/sberfriend/card/picture.png"
					alt="новости"
				/>
			</div>
			<MobileNextPage text={'Где меня найти? '} handlePagesCount={handlePagesCount} />
		</div>
	);
};
