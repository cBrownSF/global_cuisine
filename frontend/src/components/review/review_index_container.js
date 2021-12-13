import { connect } from 'react-redux'
import ReviewIndex from './review_index'
import { getListingReviews, deleteReview } from "../../actions/review_actions";

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.listingId);
    return {
        reviews: Object.values(state.reviews),
        userId: state.session.id,
        listingId: ownProps.listingId
        }
}
 
const mapDispatchToProps = (dispatch) => ({
  getListingReviews: (listingId) => dispatch(getListingReviews(listingId)),
  deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex)