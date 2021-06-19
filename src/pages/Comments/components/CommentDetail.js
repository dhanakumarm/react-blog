import '../Comment.css';

const CommentDetail = () => {
  return (
    <div id="row">
      <div className="comment">
        <div className="comment-heading">
          <div className="comment-title">s3 Test Payment 2 says:</div>
          <div className="commentlink">
            <a className="cid" title="Permalink to this comment" href="/">
              #3
            </a>
          </div>
        </div>
        <div className="divider"></div>
        <div className="time">June 17, 2021 at 11:16 am </div>
        <div className="content">posted by demo on January 3, 2009</div>
      </div>
    </div>
  );
};
export default CommentDetail;
