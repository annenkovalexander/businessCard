import { useEffect } from 'react';
import { sendAE } from '../../../utils/utils';
import './MobileFifthPage.scss';

export const MobileFifthPage = ({ handleStories }) => {
	useEffect(() => {
		const el = document.getElementsByClassName('mobile_fifth_page')[0].parentNode;
		el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
	}, []);
	return (
		<div className="mobile_fifth_page">
			<h2>СберДруг</h2>
			<h2 className="colored">Где меня найти?</h2>
			<div className="mobile_fifth_page_wrapper">
				<div className="first">
					<span className="text">
						<span className="colored">Прямой вызов</span>
						<span>в любое время</span>
						<span className="subtitle">для IOS</span>
					</span>
					<div className="icon_with_text">
						<img src="https://cdn.sberdevices.ru/temp/sberfriend/Helpful/Icon_26.png" alt="Настрой Siri" />
						<span>
							Настрой Siri <span className="subtitle">{'(скоро)'}</span>
						</span>
					</div>
				</div>
				<div className="second">
					<span className="text">
						<span>
							или <span className="colored">по расписанию </span>
						</span>
					</span>
					<div className="icon_with_text">
						<img
							src="https://cdn.sberdevices.ru/temp/sberfriend/Helpful/Icon_26.png"
							alt="Настройте PUSH"
						/>
						<span>
							<span>
								Настройте PUSH актуальные сводки <span className="subtitle">{'(скоро)'}</span>
							</span>
						</span>
					</div>
				</div>
				<div className="third" onClick={() => sendAE('dialog')}>
					<span className="text">
						<span>
							Перейдем
							<span className="colored">
								{' '}
								к <span style={{ textTransform: 'uppercase' }}>диалогу</span>
							</span>
						</span>
						<span className="colored">сейчас?</span>
					</span>
					<img src="https://cdn.sberdevices.ru/temp/sberfriend/Helpful/Icon_26.png" alt="диалог" />
				</div>
				<div className="bottom_wrapper">
					<div className="bottom_header">
						<span>
							Все мои{' '}
							<span className="colored" style={{ textTransform: 'uppercase' }}>
								навыки
							</span>
						</span>
						<span>
							<span className="colored">доступны</span> в приложениях
						</span>
					</div>
					<div className="cards_wrapper">
						<div className="imgs">
							<img src="https://cdn.sberdevices.ru/temp/sberfriend/Helpful/Icon_3.png" alt="Пульс" />
							<span>Пульс</span>
						</div>
						<div className="imgs">
							<img src="https://cdn.sberdevices.ru/temp/sberfriend/Helpful/Icon_1.png" alt="СберДруг" />
							<span>СберДруг</span>
						</div>
						<div className="imgs">
							<img src="https://cdn.sberdevices.ru/temp/sberfriend/Helpful/Icon_2.png" alt="СберЧат" />
							<span>СберЧат</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
