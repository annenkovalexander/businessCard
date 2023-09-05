import { sendAE } from '../../../utils/utils';
import './Card.scss';

const eventHandler = (eventName) => {
	sendAE(eventName, 'some paramter');
};

export const Card = ({ event, text, background, page, handlePagesCount, isDisabled }) => {
	return isDisabled ? (
		<div className={`card ${event} disabled`} style={{ background }}>
			<img src="https://cdn.sberdevices.ru/temp/sberfriend/Helpful/Icon_26.png" alt="mic" />
			<span>{text}</span>
			<span className="subtitle">{'(cкоро)'}</span>
		</div>
	) : (
		<div
			className={`card ${event}`}
			style={{ background }}
			onClick={(e) => {
				e.preventDefault();
				console.log('page', page);
				if (page) handlePagesCount(page);
				eventHandler(event);
			}}
		>
			<img src="https://cdn.sberdevices.ru/temp/sberfriend/Helpful/Icon_26.png" alt="mic" />
			<span>{text}</span>
			{text == 'Настроить' ? <span className="subtitle">{'(cкоро)'}</span> : null}
		</div>
	);
};
