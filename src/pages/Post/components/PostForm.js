const PostForm = () => {
  return (
    <div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="title" type="text" className="validate" />
              <label htmlFor="title">Title</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <textarea id="content" className="materialize-textarea"></textarea>
              <label htmlFor="content">Content</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="tags" type="text" className="validate" />
              <label htmlFor="tags">Tags</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <select defaultValue="0">
                <option value="0">
                  Choose your option
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <label>Materialize Select</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s4 m6 xl2">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Submit
              </button>
            </div>

            <div className="input-field col s4 m6 xl2">
              <button
                className="btn waves-effect waves-light"
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
  );
};

export default PostForm;
