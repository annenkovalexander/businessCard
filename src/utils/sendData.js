import { initialize } from '../api/smartmarket';

export const getData = () => {
  return window.evg_assistant = initialize(() => window.evg_assistant_state);
}

export const sendAE = (act, stf) => {
  window.evg_assistant.sendData({ action: { action_id: act, parameters: stf }});
};