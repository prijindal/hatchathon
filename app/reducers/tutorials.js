import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import type { Action } from '../actions/types';
import { ADD_TUTORIAL } from '../actions/tutorials';

export type State = [];

const INITIAL_STATE = Immutable([]);

const addTutorial = (state: State = INITIAL_STATE, action: Action) => {
  for (let i = 0; i < state.length; i++) {
    if (state[i] === action.content) {
      return state;
    }
  }
  // if (action.content in state) return state;
  return [
    ...state,
    action.content,
  ];
};

const HANDLERS = {
  [ADD_TUTORIAL]: addTutorial,
};

export default createReducer(INITIAL_STATE, HANDLERS);
