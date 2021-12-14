import { connect } from 'react-redux';
import { writeReview, removeReviewErrors } from "../../actions/review_actions";
import ReviewForm from './review_form';
// import {withRouter} from "react-router-dom";

const mSTP = (state, ownProps) => {
  debugger;
  return {  
  review: {
        review: '',
        score: "5",
        user_id: state.session.user.id,
        listing_id: ownProps.listingId,
        reviewer_name: ""
    },
    formType: 'Create Review',
    currentUser: state.session.user,
    listing: ownProps.listing,
    errors: Object.values(state.errors.review)
  }
}

const mDTP = dispatch => ({
    submitReview: review => dispatch(writeReview(review)),
    removeReviewErrors: () => dispatch(removeReviewErrors())
})
export default connect(mSTP, mDTP)(ReviewForm)