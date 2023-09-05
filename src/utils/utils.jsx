import {
	createAssistant,
	// AssistantAppState,
	createSmartappDebugger,
	// createAssistantDev,
} from '@sberdevices/assistant-client';

export const initialize = (getState) => {
	if (process.env.REACT_APP_DEB === 'test') {
		const token =
			'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkMmM0YTcxODU0OTgxODEyMDFiZDk1NGYwNGM3Mzc5MzNlYTk3YzU5NGVhNTNlMDU0YTM4YzFjZmIxMmU5YzAwNTM5YmU5MjcwMDQyNjI5OCIsImF1ZCI6IlZQUyIsImV4cCI6MTY2Njg0ODY3MSwiaWF0IjoxNjY2NzYyMjYxLCJpc3MiOiJLRVlNQVNURVIiLCJ0eXBlIjoiQmVhcmVyIiwianRpIjoiNGRiYWUxOGMtMGI4OC00MDgwLThkYjMtMzM4NjQxMmZlZWQ5Iiwic2lkIjoiNjUwM2VkY2QtZTdlOS00Y2Q2LTlkM2UtYjBhZjY4ZTU2MmU3In0.bgxQhjloFFe2mExPApwm3Fu5HzpuDMQCvS4wEpRe9By4D_nQVCaHnmUKzo5kDWobSrtLUoEVTFUGDR_oIzH9yeLif53c7rC_Wj9SYr8fBAti1cFL7fjOmQBxybgVrzmiwiN7IJefagFliHeHanX1wdChv4RFkYx0oQJowVYcWlkEr6AIuXSRkz_0yqUzIz7JAxAAe6nDBxMWvYBGBXKiTQ0kyzve-grBtWjfgoY8_lLdPfJWLb2BoABBs5DMhSm8wlV9-xXXcHT4cZn1Gu_ylXSTEMYAjyBM01DSQgBcCMONLc9sx4bd0PomowlS1B7w6tf4PO6rzRf4DYNj8uPWqD5RtH_hO5UjtFpKBt1hjHSxyyRU1MAKB8wQiE-Gn_6WmJ5ZFcd9rJoCMBRYu5wWdT3Q3Qdp3HXtuHaREug0tmwIL560nk0EG7UxQWWxPtWItvWTI0VRyqx_ZQZOxsdxpUZhUlO0vF7gUPTMIvMETsgaMtaLYyXP0nlnMjxqkrs_m0NgRXKx4MDdwYAdWidiaFaVhOZ_1nR0Czyk0NebujBlCrAM97q5sjrC9_fnOUaVqWoEkKBMifhn17h5Sy7JPNAQQtMhCMcMRvZ9iQfF4WVHyMktIPtHXw74AdSI6ss3RN9_5ewERX3C5jkTeERbZtdgdNNZmAGXGWEngeg9DVk';
		return createSmartappDebugger({
			token: token || process.env.REACT_APP_ASSISTANT_TOKEN,
			initPhrase: process.env.REACT_APP_INIT_PHRASE || 'запусти business cards',
			getState,
			enableRecord: false,
		});
	}
	return createAssistant({ getState });
};

export const sendAE = (act, stf) => {
	window.evg_assistant.sendData({
		action: { action_id: act, parameters: stf },
	});
};

export function makeObjectDeepCopy(obj) {
	if (typeof obj !== 'object' || obj == null) return obj;
	const result = Array.isArray(obj) ? [] : {};
	for (let key in obj) {
		const value = obj[key];
		result[key] = makeObjectDeepCopy(value);
	}
	return result;
}
