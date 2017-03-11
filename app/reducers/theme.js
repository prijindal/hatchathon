import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import type { Action } from '../actions/types';
import { SET_THEME } from '../actions/theme';

export type State = string

const INITIAL_STATE = Immutable('');

const setTheme = (state: State = INITIAL_STATE, action: Action) => action.payload;

const HANDLERS = {
  [SET_THEME]: setTheme,
};

export default createReducer(INITIAL_STATE, HANDLERS);
