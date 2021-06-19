import React from "react";
import CommentDetail from "../Comments/components/CommentDetail";
import CommentForm from "../Comments/components/CommentForm";
import PostDetails from "./components/PostDetail";

const PostView = () => {
  return (
    <div id="row">
      <div id="grid-layouts" className="section scrollspy">
        <PostDetails />
      </div>

      <div id="commments">
        <h5>2 comments </h5>
        <CommentDetail />
        <CommentDetail />
        <CommentDetail />
      </div>

      <div className="row">
        <CommentForm />
      </div>
    </div>
  );
};
export default PostView;
