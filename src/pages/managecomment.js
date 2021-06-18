const ManageComment = () => {
  return (
    <div>
      <div id="grid-layouts" class="section scrollspy">
        <h5>Manage Comments</h5>

        <div id="commments">
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
              <div class="time">
                <a href="/">Update</a> |
                <a class="delete" href="/">
                  {" "}
                  Delete
                </a>{" "}
                | June 17, 2021 at 11:16 am{" "}
              </div>
              <div class="content">posted by demo on January 3, 2009</div>
            </div>
          </div>
        </div>

        <div class="row">
          <form class="col s12">
            <h5>Update Comment </h5>
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

export default ManageComment;
