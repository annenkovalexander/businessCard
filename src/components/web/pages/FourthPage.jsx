import { sendAE } from '../../../utils/utils';
import { NextPage } from '../layout/NextPage';
import './FourthPage.scss';

export const FourthPage = ({ handlePagesCount }) => {
	return (
		<div className="fourth_page">
			<div className="fourth_page_wrapper">
				<h1>СберДруг</h1>
				<h2 className="colored">Чем я могу быть полезен?</h2>
				<h2>Помогу в рабочих и личных задачах </h2>
				<div className="texts_wrapper">
					<div className="text_with_icon" onClick={() => sendAE('catalog', 'some parameter')}>
						<div className="text_with_icon_wrapper">
							<img src="https://cdn.sberdevices.ru/temp/sberfriend/Helpful/Icon_26.png" alt="РАССКАЖИ" />
							<span>СберДруг,</span>
						</div>
						<span>
							расскажи о <span className="colored"> навыках</span>
						</span>
					</div>
					<div className="text_with_icon">
						<div className="text_with_icon_wrapper">
							<img src="https://cdn.sberdevices.ru/temp/sberfriend/Helpful/Icon_26.png" alt="РАССКАЖИ" />
							<span>или РАССКАЖИ</span>
						</div>
						<span>
							<span className="colored with_ml">НОВОСТИ О СЕБЕ</span>
							<span className="subtitle" style={{ color: '#ffffff80' }}>
								{' (скоро)'}
							</span>
						</span>
					</div>
				</div>
			</div>
			<NextPage handlePagesCount={handlePagesCount} text={'Где меня найти?'} />
		</div>
	);
};
