import './Promo.scss';

export const Promo = () => {
	return (
		<div className="promo">
			<div className="promo_header">
				<img src="https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/logo.png" alt="СберДруг" />
				<h1 style={{ color: 'white' }}>Салют!</h1>
			</div>
			<div className="promo_wrapper">
				<span className="colored">Я СберДруг&nbsp;&nbsp;—</span>
				<span>Ваш виртуальный</span>
				<span className="colored">ассистент и коллега</span>
			</div>
		</div>
	);
};
