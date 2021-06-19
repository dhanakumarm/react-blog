import React from "react";

const PostDetail = () => {
  return (
    <div id="row">
      <div className="section">
        <h5>
          <a href="/post">Welcome</a>{" "}
        </h5>
        <div className="divider"></div>
        <div className="content">
          <span className="grey-text text-lighten-1">
            posted by demo on January 3, 2009
          </span>
        </div>

        <div className="content">
          <p>
            This blog system is developed using Yii. It is meant to demonstrate
            how to use Yii to build a complete real-world application. Complete
            source code may be found in the Yii releases.
          </p>

          <p>
            Feel free to try this system by writing new posts and posting
            comments.
          </p>
        </div>

        <div className="light-blue lighten-5">
          <b>Tags: </b>
          <a href="/">yii</a>,<a href="/">blog</a> <br />
          <a href="/">Permalink</a> | <a href="/">Comments (0)</a> | Last
          updated on January 3, 2009
        </div>
      </div>
    </div>
  );
};
export default PostDetail;
