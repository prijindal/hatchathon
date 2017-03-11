import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import type { Action } from '../actions/types';
import { SET_USER } from '../actions/user';

export type State = {}

const INITIAL_STATE = Immutable({});

const setUser = (state: State = INITIAL_STATE, action: Action) => ({
  ...state,
  ...action.payload,
});

const HANDLERS = {
  [SET_USER]: setUser,
};

export default createReducer(INITIAL_STATE, HANDLERS);
