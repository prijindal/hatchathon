export type Action =
  { type: 'OPEN_DRAWER'};

export type Dispatch = (action:Action | Array<Action>) => any;
export type GetState = () => Object;
export type PromiseAction = Promise<Action>;
