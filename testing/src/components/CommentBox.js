import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { saveComment } from '../actions/index';

class CommentBox extends Component {
	state = {
		comment: ''
	};

	handleInput = e => {
		this.setState({
			comment: e.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		// call an action creator
		// and save the comment
		this.props.saveComment(this.state.comment);

		this.setState({
			comment: ''
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h4>Add a Comment</h4>
					<textarea value={this.state.comment} onChange={this.handleInput} />
					<div>
						<button>Submit Comment</button>
					</div>
				</form>
				<div>
					<button className="fetch-comments" onClick={this.props.fetchComments}>
						Fetch Comments
					</button>
				</div>
			</div>
		);
	}
}

export default connect(null, actions)(CommentBox);
