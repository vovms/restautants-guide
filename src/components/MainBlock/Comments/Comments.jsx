import Comment from "./Comment/Comment";
import React from "react";

const Comments = (props) => {
  let newPostElemant = React.createRef();

  /* let addComment = () => {
    props.dispatch(addCommentActionCreator());
  }; */

  let onChange = () => {
    props.onChange(newPostElemant.current.value);
  }; 
  return (
    <div>
      <div>
        {/*  <input type="text" /> */}
        <textarea
          onChange={onChange}
          value={props.currCommentTExt}
          ref={newPostElemant}
        ></textarea>

        <button onClick={props.addComment}>Add comment</button>
      </div>
      <div>
        {props.CommentsArr.map((obj) => (
          <Comment CommentText={obj.CommentText} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
