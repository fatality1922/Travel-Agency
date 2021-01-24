/* SELECTORS */

export const getAllFilters = ({ filters }) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types

export const CHANGE_DURATION_FROM = createActionName('CHANGE_DURATION_FROM');
export const CHANGE_DURATION_TO = createActionName('CHANGE_DURATION_TO');
export const ADD_SEARCH_TAG = createActionName('ADD_SEARCH_TAG');
export const REMOVE_SEARCH_TAG = createActionName('REMOVE_SEARCH_TAG');


// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const changeDurationTo = payload => ({ payload, type: CHANGE_DURATION_TO });
export const changeDurationFrom = payload => ({ payload, type: CHANGE_DURATION_FROM });
export const AddSearchTag = payload => ({ payload, type: ADD_SEARCH_TAG });
export const removeSearchTag = payload => ({ payload, type: REMOVE_SEARCH_TAG });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_DURATION_FROM:
      return {
        ...statePart,
        duration: { ...statePart.duration, from: action.payload },
      };
    case CHANGE_DURATION_TO:
      return {
        ...statePart,
        duration: { ...statePart.duration, to: action.payload },
      };
    case ADD_SEARCH_TAG:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case REMOVE_SEARCH_TAG:
      return {
        ...statePart,
        tags: statePart.tags.filter((tag) => tag != action.payload),
      };
    default:
      return statePart;
  }
}
