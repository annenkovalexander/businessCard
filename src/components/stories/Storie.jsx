import { sendAE } from '../../utils/utils';
import './Storie.scss';

export const Storie = ({ index, header, mainText, subText, btnText, imgUrl }) => {
	return (
		<div className="storie" style={{ backgroundImage: `url(${imgUrl}` }} key={mainText}>
			<div className="storie_bottom_wrapper">
				<div className="storie_header">{header}</div>
				<div className="storie_maintxt">{mainText}</div>
				<div className="storie_subtxt">{subText}</div>
				<button
					className="storie_btn"
					style={index == 2 ? { marginTop: 30 } : null}
					onClick={() => sendAE('siriClick', 'some parameter')}
				>
					{btnText}
				</button>
			</div>
		</div>
	);
};
