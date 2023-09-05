import { Header } from '../web/layout/Header';
import { MobileFirstPage } from './pages/MobileFirstPage';
import { MobileSecondPage } from './pages/MobileSecondPage';
import { MobileThirdPage } from './pages/MobileThirdPage';
import { MobileFourthPage } from './pages/MobileFourthPage';
import { MobileFifthPage } from './pages/MobileFifthPage';
import './Mobile.scss';

const deviders = (index) => {
	const deviderList = [
		<li className="dot" key={'first'}></li>,
		<li className="dot" key={'second'}></li>,
		<li className="dot" key={'third'}></li>,
		<li className="dot" key={'fourth'}></li>,
		<li className="dot" key={'fifth'}></li>,
	];

	return deviderList.map((item, i) =>
		i == index ? <li className="dot active" key={i}></li> : <li className="dot" key={i}></li>
	);
};

export const Mobile = ({ index, handlePagesCount, profileName, profileImg, handleStories }) => {
	const pageIndex = index > 4 ? 4 : index;
	const pages = [
		<MobileFirstPage handlePagesCount={handlePagesCount} />,
		<MobileSecondPage handlePagesCount={handlePagesCount} />,
		<MobileThirdPage handlePagesCount={handlePagesCount} />,
		<MobileFourthPage handlePagesCount={handlePagesCount} />,
		<MobileFifthPage handlePagesCount={handlePagesCount} handleStories={handleStories} />,
	];
	return (
		<div className="mobile">
			<div className="mobile_wrapper_first">
				<div className="mobile_wrapper_second">
					<Header
						back={index > 0 ? 'go_back' : ''}
						handlePagesCount={handlePagesCount}
						fio={profileName}
						img={profileImg}
					/>
					<div className="mobile_wrapper_third">
						<div className="mobile_wrapper_fourth">
							<ul className="dots_wrapper">{deviders(index)}</ul>
							<div className="dots_wrapper" style={{ color: '#fff' }}></div>
							{pages[pageIndex]}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
