// import { sendAE } from '../../../utils/utils';
import './FifthPage.scss';

export const FifthPage = ({ handleStories }) => {
	return (
		<div className="fifth_page">
			<div className="fifth_page_wrapper">
				<h1>СберДруг</h1>
				<h2 className="colored">Где меня найти?</h2>
				<div className="fifth_page_text_wrapper">
					<div className="text">
						<span>
							<span className="colored">Прямой вызов </span>в любое время
						</span>
						<span className="subtitle">для iOS</span>
					</div>
					<div className="text">
						<span>
							или
							<span className="colored"> РАСПИСАНИЮ</span>
						</span>
					</div>
				</div>
				<div className="text_with_icon_wrapper">
					<div className="text_with_icon" onClick={handleStories}>
						<img src="https://cdn.sberdevices.ru/temp/sberfriend/Helpful/Icon_26.png" alt="Настрой Siri" />
						<span>
							<span>Настрой Siri</span>
						</span>
					</div>
					<div className="text_with_icon">
						<img src="https://cdn.sberdevices.ru/temp/sberfriend/Helpful/Icon_26.png" alt="Настрой Siri" />
						<span className="soon">
							<span>Настройте PUSH актуальные сводки</span>
							<span className="subtitle">{' (скоро)'}</span>
						</span>
					</div>
					<div className="text_with_icon">
						<img src="https://cdn.sberdevices.ru/temp/sberfriend/Helpful/Icon_26.png" alt="Настрой Siri" />
						<span>
							<span>
								Перейдем <span className="colored blue"> к ДИАЛОГУ сейчас?</span>
								<span className="subtitle">{' (скоро)'}</span>
							</span>
						</span>
					</div>
				</div>
				<div className="fifth_page_cards">
					<div className="fifth_page_cards_title">
						<span>
							Все мои <span className="colored">НАВЫКИ</span> доступны в приложениях
						</span>
					</div>
					<div className="fifth_page_cards_wrapper">
						<img src="https://cdn.sberdevices.ru/temp/sberfriend/Helpful/Icon_3.png" alt="пульс" />
						<img src="https://cdn.sberdevices.ru/temp/sberfriend/Helpful/Icon_1.png" alt="сбердруг" />
						<img src="https://cdn.sberdevices.ru/temp/sberfriend/Helpful/Icon_2.png" alt="сберчат" />
					</div>
				</div>
			</div>
		</div>
	);
};
