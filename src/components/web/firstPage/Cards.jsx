import { Card } from './Card';
import './Cards.scss';
export const Cards = ({ handlePagesCount }) => {
	const eventNames = [
		{
			eventName: 'meeting',
			text: 'Познакомиться',
			background: 'https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/meet.png',
			page: 1,
			isDisabled: false,
		},
		{
			eventName: 'setting',
			text: 'Настроить',
			background: 'https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/settings.png',
			isDisabled: true,
		},
		{
			eventName: 'play',
			text: 'Играть',
			background: 'https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/play.png',
			isDisabled: false,
		},
		{
			eventName: 'estimate',
			text: 'Оценить',
			background: 'https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/review.png',
			isDisabled: false,
		},
	];
	return (
		<div className="cards">
			{eventNames.map((item, index) => (
				<Card
					background={`url(${item.background}) center center / cover no-repeat`}
					text={item.text}
					event={item.eventName}
					handlePagesCount={handlePagesCount}
					key={index}
					page={item.page}
					isDisabled={item.isDisabled}
				/>
			))}
		</div>
	);
};
