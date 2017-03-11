import type { Action } from './types';

export const ADD_TUTORIAL = 'ADD_TUTORIAL';

export function addTutorial(content:string):Action {
  return {
    type: ADD_TUTORIAL,
    content,
  };
}
