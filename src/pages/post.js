const Post = () => {
  return (
    <div>
      <div class="col s12 m9  offset-s9">
        <div id="grid-layouts" class="section scrollspy">
          <div id="row">
            <div class="section">
              <h5>Welcome!</h5>
              <div class="divider"></div>
              <div class="content">
                <span class="blue-text text-lighten-2">
                  posted by demo on January 3, 2009
                </span>
              </div>

              <div class="content">
                <p>
                  This blog system is developed using Yii. It is meant to
                  demonstrate how to use Yii to build a complete real-world
                  application. Complete source code may be found in the Yii
                  releases.
                </p>

                <p>
                  Feel free to try this system by writing new posts and posting
                  comments.
                </p>
              </div>

              <div class="light-blue lighten-5">
                <b>Tags: </b>
                <a href="/">yii</a>,<a href="/">blog</a> <br />
                <a href="/">Permalink</a> | <a href="/">Comments (0)</a> | Last
                updated on January 3, 2009
              </div>
            </div>
          </div>
        </div>

        <div id="commments">
          <h5>2 comments </h5>

          <div id="row">
            <div class="comment">
              <div class="comment-heading">
                <div class="comment-title">s3 Test Payment 2 says:</div>
                <div class="commentlink">
                  <a class="cid" title="Permalink to this comment" href="/">
                    #3
                  </a>
                </div>
              </div>
              <div class="divider"></div>
              <div class="time">June 17, 2021 at 11:16 am </div>
              <div class="content">posted by demo on January 3, 2009</div>
            </div>
          </div>

          <div id="row">
            <div class="comment">
              <div class="comment-heading">
                <div class="comment-title">s3 Test Payment 2 says:</div>
                <div class="commentlink">
                  <a class="cid" title="Permalink to this comment" href="/">
                    #3
                  </a>
                </div>
              </div>
              <div class="divider"></div>
              <div class="time">June 17, 2021 at 11:16 am </div>
              <div class="content">posted by demo on January 3, 2009</div>
            </div>
          </div>

          <div id="row">
            <div class="comment">
              <div class="comment-heading">
                <div class="comment-title">s3 Test Payment 2 says:</div>
                <div class="commentlink">
                  <a class="cid" title="Permalink to this comment" href="/">
                    #3
                  </a>
                </div>
              </div>
              <div class="divider"></div>
              <div class="time">June 17, 2021 at 11:16 am </div>
              <div class="content">posted by demo on January 3, 2009</div>
            </div>
          </div>
        </div>

        <div class="row">
        
          <form class="col s12">
          <h5>Leave a Comment </h5>
            <div class="row">
              <div class="input-field col s6">
                <input id="first_name" type="text" class="validate" />
                <label for="first_name">First Name</label>
              </div>
              <div class="input-field col s6">
                <input id="last_name" type="text" class="validate" />
                <label for="last_name">Last Name</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <input id="email" type="email" class="validate" />
                <label for="email">Email</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <input id="subject" type="text" class="validate" />
                <label for="subject">Website</label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <textarea id="body" class="materialize-textarea"></textarea>
                <label for="body">Comment </label>
              </div>
            </div>

            <div class="row">
              <div class="input-field col s2">
                <button
                  class="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  Submit
                </button>
              </div>

              <div class="input-field col s2">
                <button
                  class="btn waves-effect waves-light"
                  type="button"
                  name="action"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Post;
