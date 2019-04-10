import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { swapiActionCreator } from '../actions/index';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.swapiActionCreator()
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      <h1>Fetching</h1>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isFetching: state.charsReducer.isFetching,
  error: state.charsReducer.error
})

export default connect(
  mapStateToProps,
  { swapiActionCreator }
)(CharacterListView);
