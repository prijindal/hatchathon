import type { Action } from './types';

export const SET_THEME = 'SET_THEME';

export function setTheme(user:string):Action {
  return {
    type: SET_THEME,
    payload: user,
  };
}
