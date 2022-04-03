import React from "react";
import {
  addCommentActionCreator,
  onChangeActionCreator,
} from "../../../redux/commentsReducer";
import Comments from "./Comments";

const CommentsContainer = (props) => {

  let state = props.store.getState();

  let addComment = () => {
    props.store.dispatch(addCommentActionCreator());
  };

  let onChange = (text) => {
    debugger;
    props.store.dispatch(onChangeActionCreator(text));
  };

  return (
    <Comments currCommentTExt = {state.CommentObj.currCommentTExt} CommentsArr = {state.CommentObj.CommentsArr} addComment = {addComment} onChange = {onChange} />
  );
};

export default CommentsContainer;
