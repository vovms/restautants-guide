const CHANGE_COMMENT_TEXT = "CHANGE-COMMENT-TEXT";
const ADD_COMMENT = "ADD-COMMENT";

const initialState = {
  CommentsArr: [
    { CommentText: "CommentText", CommentID: 1 },
    { CommentText: "CommentText", CommentID: 2 },
    { CommentText: "CommentText", CommentID: 3 },
  ],
  currCommentTExt: "",
};

const commentsReduser = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COMMENT_TEXT:
      state.currCommentTExt = action.text;
      return state;
    case ADD_COMMENT:
      let text = state.currCommentTExt;
      state.CommentsArr.push({
        CommentText: text,
        CommentID: state.CommentsArr.length + 1,
      });
      state.currCommentTExt = "";
      return state;
    default:
      return state;
  }
};

export let addCommentActionCreator = () => {
  return {
    type: ADD_COMMENT,
  };
};

export let onChangeActionCreator = (text) => {
  return {
    type: CHANGE_COMMENT_TEXT,
    text: text,
  };
};

export default commentsReduser;
