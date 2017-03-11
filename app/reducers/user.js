import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import type { Action } from '../actions/types';
import { SET_USER } from '../actions/user';

export type State = {
  token: string
}

const INITIAL_STATE = Immutable({
  token: '',
});

const setUser = (state: State = INITIAL_STATE, action: Action) => ({
  ...state,
  token: action.payload,
});

const HANDLERS = {
  [SET_USER]: setUser,
};

export default createReducer(INITIAL_STATE, HANDLERS);
