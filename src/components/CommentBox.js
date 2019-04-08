import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends React.Component {
    state = {
        comment: ''
    }

    handleChange = (event) => {
        this.setState({comment: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // call an action creator
        this.props.saveComment(this.state.comment);
        // save the comment to redux
        this.setState({comment: ''})
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea value={this.state.comment} onChange={this.handleChange} />
                    <div>
                        <button>Submit comment</button>
                    </div>
                </form>
                <button className='fetch-comments' onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        )
    }
}
export default connect(null, actions)(CommentBox)