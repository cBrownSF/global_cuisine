import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";
// import LikeIndexContainer from "../likes/like_index_container"

class Profile extends React.Component {

  componentDidMount() {
    this.props.getUserListings(this.props.currentUser.id)
    this.props.getLikes()
  }

  render(){
      const {currentUser, listings, likes} = this.props;
      let userRecipes = [];
      listings.forEach((listing) => {
          if(listing.author_id === currentUser.id){
              userRecipes.push(listing)
          }
      })
      let userLikes = [];
      likes.forEach((like) => {
        if(like.liker_id === currentUser.id){
          userLikes.push(like)
        }
      })
      return (
        <div className="profile-outer">
          <div className="profile-username">
            <p>Welcome {currentUser.username}!!</p>
          </div>
          <div>
            {userRecipes.length === 0 ? (
                <div className="detail-no-recipe">
                  <div className="not-detail">
                    <p className="p-not-detail">
                      You have not created any recipe yet. Please click below to
                      create your own recipe.
                    </p>
                  </div>
                  <div className="link-create-profile">
                    <Link to="/recipes/new" className="l-create-recipe">
                      Create Recipe
                    </Link>
                  </div>
                </div>
            ) : (
              <div className="yes-recipe-outer">
                <div className="your-recipe">
                  <p className="p-your-recipe">Your Recipe</p>
                </div>
                {userRecipes.map((listing, index) => (
                  <div key={index + "b"} className="user-recipe">
                    <Link
                      to={`/recipes/${listing._id}`}
                      className="link-profile"
                    >
                      <div className="profile-recipe-title-image">
                        <div className="div-image-profile">
                          <img
                            src={listing.picture}
                            alt="food-pic"
                            className="images-profile"
                          ></img>
                        </div>
                        <div className="listing-title-profile">
                          <p className="title-profile">{listing.title}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
          {userLikes.length === 0 ? (
                <div className="detail-no-like">
                  <div className="not-detail">
                    <p className="p-not-detail">
                      You have not liked any recipes yet.
                    </p>
                  </div>
                  <div className="link-all-recipes">
                    <Link to="/recipes" className="l-all-recipes">
                      List of Recipes
                    </Link>
                  </div>
                </div>
            ) : (
              <div className="yes-like-outer">
                <div className="your-likes">
                  <p className="p-your-likes">Your Likes</p>
                </div>
                {userLikes.map((like, index) => (
                  <div key={index + "b"} className="user-like">
                    <Link
                      to={`/recipes/${listing._id}`}
                      className="link-profile"
                    >
                      <div className="profile-recipe-title-image">
                        <div className="div-image-profile">
                          <img
                            src={listing.picture}
                            alt="food-pic"
                            className="images-profile"
                          ></img>
                        </div>
                        <div className="listing-title-profile">
                          <p className="title-profile">{listing.title}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
  
      );
  }
}

export default Profile;