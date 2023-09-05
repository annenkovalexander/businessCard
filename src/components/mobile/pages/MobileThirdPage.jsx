import { useEffect } from 'react';
import { MobileNextPage } from '../MobileNextPage';
import './MobileThirdPage.scss';

export const MobileThirdPage = ({ handlePagesCount }) => {
	useEffect(() => {
		const el = document.getElementsByClassName('mobile_third_page')[0].parentNode;
		el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
	}, []);
	return (
		<div className="mobile_third_page">
			<h2>СберДруг</h2>
			<h2 className="colored blue">Что важно знать обо мне? </h2>
			<div className="mobile_third_page_wrapper">
				<div className="text_block_first">
					<span>
						Понять&nbsp;<span className="colored">слушаю,&nbsp;думаю,&nbsp;отвечаю</span>
					</span>
					<span>
						или <span className="colored">не активен —</span>
					</span>
					<span>
						можно&nbsp;<span className="colored">по&nbsp;анимации&nbsp;лава-шара&nbsp;—</span>
					</span>
					<span>зеленой «кнопке» внизу экрана</span>
				</div>
				<div className="text_block_second">
					<img src="https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/inactive.png" alt="Не активен" />
					<span className="colored">Не активен</span>
				</div>
				<div className="text_block_third">
					<span className="colored blue">Активировать слушание</span>
					<span>
						Если я не активен,{' '}
						<span className="colored">нажмите на лава-шар и дождитесь состояния «слушаю»</span>
					</span>
				</div>
				<div className="text_block_fourth">
					<div className="left">
						<div className="icon_with_text">
							<img
								src="https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/listen.png"
								alt="Слушаю"
							/>
							<span className="colored">Слушаю</span>
						</div>
						<div className="icon_with_text">
							<img
								src="https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/speak.png"
								alt="Говорю"
							/>
							<span className="colored">Говорю</span>
						</div>
						<div className="icon_with_text">
							<img src="https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/think.png" alt="Думаю" />
							<span className="colored">Думаю</span>
						</div>
					</div>
					<div className="right">
						<span className="top">
							<span>
								<span className="subtitle">Если&nbsp;я&nbsp;слушаю,</span>
								<span className="subtitle">но&nbsp;не&nbsp;записываю</span>
								<span className="subtitle">за&nbsp;Вами&nbsp;-</span>
							</span>
							<span>переоткройте меня</span>
						</span>
						<span>
							<span>
								<span className="subtitle">Если я говорю</span>
								<span className="subtitle">или думаю</span>
							</span>
							я Вас не услышу
						</span>
					</div>
				</div>
				<div className="text_block_fifth">
					<span className="colored blue">Выключить озвучку и слушание</span>
					<span>Чтобы я замолчал и перестал</span>
					<span>
						слушать <span className="colored">— нажмите на лава-шар</span>
					</span>
					<span className="colored">когда я в активном состоянии</span>
				</div>
			</div>
			<MobileNextPage text={'Чем я полезен?'} handlePagesCount={handlePagesCount} />
		</div>
	);
};
