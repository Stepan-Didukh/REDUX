import { ADD_DOGGO } from '../action-types';

export const likeDoggo = (doggoUrl) => ({
  type: ADD_DOGGO,
  payload: {
    doggoUrl
  }
});

export const deleteDoggo = (doggoUrl) => {
  return ({
    type: 'DELETE_DOGGO',
    payload: {
      doggoUrl
    }
  });
}
