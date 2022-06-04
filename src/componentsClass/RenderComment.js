import React, { Component } from 'react';
import dateFormat from "dateformat";

class RenderComment extends Component {
    render() {
        const comments = this.props.comments;
        if (comments != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>-- {comment.author} </p>
                            <p>{dateFormat(comment.date, "dd/mm/yyyy")}</p>
                        </li>
                        );
                    })}
                    </ul>
                </div>
            );
        }
        else {
            return <div></div>
        }
    }
}

export default RenderComment;