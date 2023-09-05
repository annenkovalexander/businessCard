import { useState, useEffect } from 'react';
import { Storie } from './Storie';
import { sendAE } from '../../utils/utils';
import './Stories.scss';

const getUserTime = () => {
	const clientTime = new Date();
	const monthsList = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря',
	];
	const [time, setTime] = useState(
		new Intl.DateTimeFormat('ru-RU', { hour: 'numeric', minute: 'numeric' }).format(clientTime)
	);
	const [date, setDate] = useState(clientTime.getDate());
	let weekday = new Intl.DateTimeFormat('ru-RU', { weekday: 'short' }).format(new Date());

	return (
		<div className="stories_time" style={{ marginLeft: 50 }}>
			<span className="time">{time}</span>
			<span className="date">{`${weekday}, ${date} ${monthsList[clientTime.getMonth()]}`}</span>
		</div>
	);
};

const progress = (index) => {
	const list = [
		<div className="progress_grey">
			<div className="progress"></div>
		</div>,
		<div className="progress_grey">
			<div className="progress"></div>
		</div>,
		<div className="progress_grey">
			<div className="progress"></div>
		</div>,
		<div className="progress_grey">
			<div className="progress"></div>
		</div>,
		<div className="progress_grey">
			<div className="progress"></div>
		</div>,
	];
	return list.map((item, i) =>
		i == index ? (
			<div className="progress_grey">
				<div className="progress active"></div>
			</div>
		) : i < index + 1 ? (
			<div className="progress_grey">
				<div className="progress done"></div>
			</div>
		) : (
			<div className="progress_grey">
				<div className="progress"></div>
			</div>
		)
	);
};

export const StoriesList = ({ handleStories, isMobile }) => {
	const [storieIndex, setStorieIndex] = useState(0);
	const device = isMobile == 'mobile';
	const storiesDataList = [
		{
			index: 0,
			header: 'Ассистенты живут дружно',
			mainText: 'Обращайтесь напрямую',
			subText: 'Настройте Siri на устройствах iOS для быстрого вызова ассистента СберДруг',
			btnText: 'Настроить Siri',
			imgUrl: 'https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/stories_1.jpg',
		},
		{
			index: 1,
			header: 'Ассистенты живут дружно',
			mainText: 'Небольшая настройка',
			subText: 'Потребуется только сохранить заданную команду в параметрах управления',
			btnText: 'Настроить Siri',
			imgUrl: 'https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/stories_2.jpg',
		},
		{
			index: 2,
			header: 'Ассистенты живут дружно',
			mainText: 'Без приложения',
			subText: 'После настройки помощник будет откликаться на имя',
			btnText: 'Настроить Siri',
			imgUrl: 'https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/stories_3.jpg',
		},
		{
			index: 3,
			header: 'Ассистенты живут дружно',
			mainText: 'Управляйте голосом',
			subText: 'Попросите Siri позвать СберДруга и дайте поручение личному помощнику',
			btnText: 'Настроить Siri',
			imgUrl: 'https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/stories_4.jpg',
		},
		{
			index: 4,
			header: 'Ассистенты живут дружно',
			mainText: 'Делегируйте задачи',
			subText: 'Виртуальный ассистент с легкостью избавит от рутины. Попробуйте прямо сейчас!',
			btnText: 'Попробовать',
			imgUrl: 'https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/stories_5.jpg',
		},
	];
	const storieArr = storiesDataList.map((item) => <Storie {...item} />);

	useEffect(() => {
		if (storieIndex > 4) return handleStories();
		const timer = setTimeout(() => {
			setStorieIndex(storieIndex + 1);
		}, 10000);
		return () => clearTimeout(timer);
	}, [storieIndex]);

	const onControlsClick = (e, eventName) => {
		e.preventDefault();
		e.target.classList.toggle('disabled');
		sendAE(eventName, '');
	};

	const onStorieChange = (n) => {
		if (n + storieIndex < 0 || n + storieIndex > 4) return handleStories();
		setStorieIndex(n + storieIndex);
		return <Storie {...storiesDataList[storieIndex]} />;
	};

	return (
		<div className="stories_wrapper">
			<span style={{ paddingLeft: 50 }}>{getUserTime()}</span>
			<div className="stories_btns">
				<span className="left" onClick={() => onStorieChange(-1)}></span>
				<span className="right" onClick={() => onStorieChange(1)}></span>
			</div>

			<div className="stories_control_btns">
				<div className="shadow"></div>
				<div className="stories_control_btns_wrapper">
					<button className="speak" onClick={(e) => onControlsClick(e, 'pronunceOff')}></button>
					<button className="mic" onClick={(e) => onControlsClick(e, 'micOff')}></button>
				</div>
			</div>
			<div className="wrapper">
				<div className="progress_wrapper">{progress(storieIndex)}</div>
				<div className="flex">
					{/* {device && storieArr} */}
					{!device && <Storie {...storiesDataList[storieIndex]} />}
				</div>
			</div>
		</div>
	);
};
