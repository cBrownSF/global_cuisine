import { RECEIVE_LISTING_ERRORS, REMOVE_LISTING_ERRORS, RECEIVE_LISTING } from "../actions/listing_actions";

const _nullErrors = []
const ListingErrorsReducer = (oldState = _nullErrors, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_LISTING_ERRORS:
      debugger;
      return action.errors
    case RECEIVE_LISTING:
    case REMOVE_LISTING_ERRORS:
    default:
      return oldState;
  }
};

export default ListingErrorsReducer;
