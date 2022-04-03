import commentsReduser from "./commentsReducer";


let currCommentTExt = "";

let RestArr = [
  { RestName: "Restaurant 1", RestID: 1 },
  { RestName: "Restaurant 2", RestID: 2 },
  { RestName: "Restaurant 3", RestID: 3 },
  { RestName: "Restaurant 4", RestID: 4 },
];

let CommentsArr = [
  { CommentText: "CommentText", CommentID: 1 },
  { CommentText: "CommentText", CommentID: 2 },
  { CommentText: "CommentText", CommentID: 3 },
];

let CommentObj = {
  CommentsArr: CommentsArr,
  currCommentTExt: currCommentTExt,
};

export let store = {
  _state: {
    RestArr: RestArr,
    CommentObj: CommentObj,
  },
  getState() {
    return this._state;
  },
  rerenderEntireTree() {},
  addComment() {
    let text = this._state.CommentObj.currCommentTExt;
    this._state.CommentObj.CommentsArr.push({
      CommentText: text,
      CommentID: this._state.CommentObj.CommentsArr.length + 1,
    });
    this._state.CommentObj.currCommentTExt = "";
   this.rerenderEntireTree(this.getState());
  },
  onChangecurrCommentTExt(text) {
    this._state.CommentObj.currCommentTExt = text;
    this.rerenderEntireTree(this.getState());
  },
  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },
  dispatch(action) {
    commentsReduser(this._state.CommentObj,action);
    this.rerenderEntireTree(this.getState()); 
  },
};

