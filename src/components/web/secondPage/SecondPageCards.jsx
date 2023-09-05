import { SecondPageCard } from './SecondPageCard';
import './SecondPageCards.scss';

export const SecondPageCards = () => {
	const cards = [
		{
			text: 'Голосом',
			background: 'https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/voice.png',
		},
		{
			text: 'Нажатие на экран',
			background: 'https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/touch.png',
		},
		{
			text: ['Голосом', ' и нажатием'],
			background: 'https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/voice_and_touch.png',
		},
	];
	return (
		<div className="second_page__cards">
			{cards.map((item, index) => (
				<SecondPageCard
					key={index}
					text={item.text}
					background={`url(${item.background}) center center / cover no-repeat`}
				/>
			))}
		</div>
	);
};
