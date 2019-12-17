import {ADD_DOGGO} from '../action-types';

const intialState = {
    likedDoggos: []
};

// this is doggos reducer
const doggos = (state = intialState, action) => {

    switch (action.type) {
        case ADD_DOGGO: {
            const {payload: {doggoUrl}} = action;

            const {likedDoggos} = state;

            // this is new state
            return {
                likedDoggos: [...likedDoggos, doggoUrl] // push

            };
        }
        case 'DELETE_DOGGO': {
            const {payload: {doggoUrl}} = action;

            const {likedDoggos} = state;

            // this is new state
            return {
                likedDoggos: likedDoggos.filter(el => el !== doggoUrl) //delete
            };
        }
      case 'DELETE_ALL': {
        const {payload: {doggoUrl}} = action;

        const {likedDoggos} = state;

        // this is new state
        return {
          likedDoggos: '' //delete
        };
      }


        // todo: add remove doggo functionality
        default:
            return state
    }
};

export default doggos;
