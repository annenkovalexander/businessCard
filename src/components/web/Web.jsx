import { Header } from './layout/Header';
import { FirstPage } from './pages/FirstPage';
import { SecondPage } from './pages/SecondPage';
import { ThirdPage } from './pages/ThirdPage';
import { FourthPage } from './pages/FourthPage';
import { FifthPage } from './pages/FifthPage';

export const Web = ({ index, handlePagesCount, fio, img, handleStories }) => {
	const pageIndex = index > 4 ? 4 : index;
	const pages = [
		<FirstPage handlePagesCount={handlePagesCount} />,
		<SecondPage handlePagesCount={handlePagesCount} />,
		<ThirdPage handlePagesCount={handlePagesCount} />,
		<FourthPage handlePagesCount={handlePagesCount} />,
		<FifthPage handleStories={handleStories} />,
	];
	return (
		<div className="app_wrapper">
			<Header back={index > 0 ? 'go_back' : ''} handlePagesCount={handlePagesCount} fio={fio} img={img} />
			{pages[pageIndex]}
		</div>
	);
};
