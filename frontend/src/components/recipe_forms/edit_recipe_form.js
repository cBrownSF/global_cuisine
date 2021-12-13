import React from "react";
import { withRouter } from "react-router-dom";

class EditRecipeForm extends React.Component {
  constructor(props) {
    super(props)

    const listing = this.props.listing
    this.state = {
      name: this.props.currentUser.username,
      author_id: this.props.currentUser.id,
      ingredients: listing.ingredients,
      instruction: listing.instruction,
      details: listing.details,
      difficulty: listing.difficulty,
      servings: listing.servings,
      title: listing.title,
      picture:
        "https://global-cuisine.s3.us-west-1.amazonaws.com/worldflags.jpeg",
      country: "Italy",
      editId: this.props.listing._id,
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }
  componentDidMount() {
    this.props.receiveListing(this.props.match.params.listingId);
  }

  componentDidUpdate() {
    if (!this.props.listing) {
      this.props.receiveListing(this.props.match.params.listingId);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .submitForm(this.state)
      .then(this.props.history.push("/"));
  }
  handleKeyPress(instruction) {

    return e => {
      if (e.key === 'Enter') {
        this.setState({
          [instruction]: e.currentTarget.value + '\n'
        })
      }
    }
  }
  handleInput(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }
  render() {
    if (!this.props.listing) {
      return null;
    }
    console.log(this.props.currentUser)
    return (
      <div>
        {/* <p> <Link to={`/listings/${listing.id}/edit`}>Edit</Link></p> */}
        <form onSubmit={this.handleSubmit}>
          <div>
            <br />
            <input type="text"
              value={this.state.title}
              onChange={this.handleInput('title')}
              placeholder="title of recipe"
            />
            <br />
            <input type="text"
              value={this.state.ingredients}
              onChange={this.handleInput('ingredients')}
              placeholder="ingredients"
            />
            <br />
            <input type="text"
              value={this.state.servings}
              onChange={this.handleInput('servings')}
              placeholder="how many servings"
            />
            <br />
            <input type="text"
              value={this.state.picture}
              onChange={this.handleInput('picture')}
              placeholder="Add a picture"
            />
            <br />
            <input type="text"
              value={this.props.currentUser.username}
              onChange={this.handleInput('name')}
            />
            <br />
            <input type="text"
              value={this.state.details}
              onChange={this.handleInput('details')}
              placeholder="Add a succinct description"
            />
            <br />
            <textarea onKeyPress={this.handleKeyPress('instruction')}
              value={this.state.instruction}
              onChange={this.handleInput('instruction')}
              placeholder="Add your instructions here"
            />
            <br />
            <label>Country
              <select value={this.state.country} onChange={this.handleInput('country')}>
                <option value="Italy">Italy</option>
                <option value="France">France</option>
                <option value="India">India</option>
              </select>
            </label>
            <label>Difficulty
              <select value={this.state.difficulty} onChange={this.handleInput('difficulty')}>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </label>
            <br />
            <button onClick={() => this.props.deleteListing(this.props.listing._id)}>delete listing</button>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}


export default withRouter(EditRecipeForm);