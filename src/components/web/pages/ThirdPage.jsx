import { NextPage } from '../layout/NextPage';
import './ThirdPage.scss';

export const ThirdPage = ({ handlePagesCount }) => {
	return (
		<div className="third_page">
			<h1>СберДруг</h1>
			<h2 className="colored blue">Что важно знать обо мне? </h2>
			<div className="third_page_wrapper">
				<div className="first_text_block">
					<div className="first_text_block_left">
						<span>
							{' '}
							Понять <span className="colored"> слушаю, думаю, отвечаю</span> или&nbsp;
							<span className="colored">не&nbsp;активен&nbsp;—</span>
						</span>
						<span>
							{' '}
							можно <span className="colored">по анимации лава-шара — </span>
						</span>
						<span>зеленой «кнопке» внизу экрана</span>
					</div>
					<div className="first_text_block_right">
						<span className="colored blue">Выключить озвучку и слушание</span>
						<span className="text">
							Чтобы я замолчал и перестал слушать —{' '}
							<span className="colored"> нажмите на лава-шар, когда я</span>
							<span className="colored"> в активном состянии</span>
						</span>
					</div>
				</div>
				<div className="second_text_block">
					<div className="text_with_img">
						<img
							src="https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/inactive.png"
							alt="Не активен"
						/>
						<span className="colored">Не активен</span>
					</div>
					<span className="text">
						Если я не активен,{' '}
						<span className="colored"> нажмите на лава-шар и дождитесь состояния «слушаю»</span>
					</span>
				</div>
				<div className="third_text_block">
					<div className="third_text_block_left">
						<h2 className="colored blue">Активировать слушание</h2>
						<div className="icon_text_wrapper">
							<div className="text_with_img">
								<img
									src="https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/listen.png"
									alt="Слушаю"
								/>
								<span className="colored">Слушаю</span>
							</div>
							<div className="text_with_img">
								<img
									src="https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/speak.png"
									alt="Говорю"
								/>
								<span className="colored">Говорю</span>
							</div>
							<div className="text_with_img">
								<img
									src="https://cdn.sberdevices.ru/temp/sberfriend/bussines_card/think.png"
									alt="Думаю"
								/>
								<span className="colored">Думаю</span>
							</div>
						</div>
					</div>
					<div className="third_text_block_right">
						<span className="text_info">
							Если я слушаю, <span className="colored">но не записываю за Вами —</span>
							<span className="colored"> переоткройте меня</span>
						</span>

						<span className="text_info">
							Если я говорю или думаю,
							<span className="colored"> я Вас не услышу</span>
						</span>
					</div>
				</div>
			</div>
			<NextPage text={'Чем я полезен?'} handlePagesCount={handlePagesCount} />
		</div>
	);
};

/*
<div className="second_text_block">
<div className="image_text_subtitle">

			<h2>Активировать слушание</h2>
			<div className="text_with_img">
				<img src={img1} alt="Не активен" />
				<span className="colored">Слушаю</span>
			</div>
			<div className="text_with_img">
				<img src={img1} alt="Не активен" />
				<span className="colored">Говорю</span>
			</div>
			<div className="text_with_img">
				<img src={img1} alt="Не активен" />
				<span className="colored">Думаю</span>
			</div>
		</div>
	</div>
	<div className="second_text_block_right">

	</div>
</div>
</div>
</div>*/
