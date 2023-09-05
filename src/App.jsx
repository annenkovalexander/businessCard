import React, { useEffect, useState } from 'react';
import { initialize, sendAE, makeObjectDeepCopy } from './utils/utils';
import { AskAgain } from './components/web/layout/AskAgain';
import { Mobile } from './components/mobile/Mobile';
import { Web } from './components/web/Web';
import { StoriesList } from './components/stories/StoriesList';

import './App.scss';

export const App = () => {
	const [pagesCount, setPagesCount] = useState(0);
	const [currentObj, setCurrentObj] = useState(null);
	const [profileImg, setProfileImg] = useState('');
	const [wrongAnswer, setWrongAnswer] = useState(['Как-то неразборчиво.', 'Что Вы имели в виду?']);
	const [isWrongActive, setIsWrongActive] = useState(false);
	const [platform, setPlatform] = useState('');
	const [isStoriesActive, setIsStoriesActive] = useState(false);

	useEffect(() => {
		if (process.env.REACT_APP_DEB === 'test') {
			document.title = 'TESTING';
		}
		if (window.evg_assistant) return;
		window.evg_assistant = initialize(() => undefined);

		window.evg_assistant.on('data', (input) => {
			console.log('input 28', input);
			if (
				input !== undefined &&
				input.type === 'smart_app_data' &&
				input.smart_app_data !== undefined &&
				(input.smart_app_data?.device !== null ||
					input.smart_app_data.userImg ||
					input.smart_app_data.goTo ||
					input.smart_app_data.wrongText ||
					input.smart_app_data.siri)
			) {
				return setCurrentObj(makeObjectDeepCopy(input.smart_app_data));
			}
			if (input.type === 'navigation' && input.navigation?.command) {
				if (input.navigation.command === 'FORWARD') return setCurrentObj({ goTo: 'go_forward' });
			}
		});
	}, []);

	useEffect(() => {
		if (currentObj === null) return;
		if (currentObj !== null) console.log('currentObj 44', currentObj);
		if (currentObj !== null && currentObj.device) setPlatform(currentObj.device);
		if (currentObj !== null && currentObj.userImg) setProfileImg(currentObj.userImg);
		if (currentObj !== null && currentObj.siri) setIsStoriesActive(true);
		if (currentObj && currentObj.wrongText) {
			setIsWrongActive(true);
			setWrongAnswer(currentObj.wrongText);
		}
		if (currentObj !== null && currentObj.goTo && currentObj.goTo === 'go_forward') return handlePagesCount(1);
		if (currentObj && currentObj.goTo === 'go_back') return handlePagesCount(-1);
	}, [currentObj]);

	useEffect(() => {
		if (pagesCount < 0) setPagesCount(0);
		if (pagesCount > 4) setPagesCount(4);
		const eventNames = ['first', 'second', 'third', 'fourth', 'fifth'];
		eventHandler(eventNames[pagesCount]);
	}, [pagesCount]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsWrongActive(false);
		}, 3000);
		return () => clearTimeout(timeout);
	}, [isWrongActive]);

	const eventHandler = (e) => {
		sendAE(e, pagesCount);
	};

	const handlePagesCount = (n) => {
		setPagesCount(n + pagesCount);
	};

	const handleStories = () => {
		console.log('siriiii');
		// sendAE('siri', 'some parameter');
		setIsStoriesActive(!isStoriesActive);
		delete currentObj.siri;
	};

	const render = {
		web: (
			<Web
				index={pagesCount}
				back={pagesCount > 0 ? 'go_back' : ''}
				handlePagesCount={handlePagesCount}
				img={profileImg}
				handleStories={handleStories}
			/>
		),
		mobile: (
			<Mobile
				index={pagesCount}
				handlePagesCount={handlePagesCount}
				profileImg={profileImg}
				handleStories={handleStories}
			/>
		),
	};

	return (
		<div className="App">
			{(!isStoriesActive && render?.[platform]) || <></>}
			{!isStoriesActive && <AskAgain text={wrongAnswer} isWrongActive={isWrongActive} />}
			{isStoriesActive && <StoriesList handleStories={handleStories} isMobile={platform} />}
		</div>
	);
};
