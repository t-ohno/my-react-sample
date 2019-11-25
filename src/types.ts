export const increment = () => ({ type: BoxCounterActionTypes.INCREMENT });
export const decrement = () => ({ type: BoxCounterActionTypes.DECEMENT });
export const reset = () => ({ type: BoxCounterActionTypes.RESET });

export enum BoxCounterActionTypes {
  INCREMENT,
  DECEMENT,
  RESET
}
