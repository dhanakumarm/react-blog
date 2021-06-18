import M from "materialize-css";

const CreatePost = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, null);
  });

  return (
    <div>
      <div class="row">
        <h3>Create Post</h3>
        <form class="col s8">
          <div class="row">
            <div class="input-field col s12">
              <input id="title" type="text" class="validate" />
              <label for="title">Title</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <textarea id="content" class="materialize-textarea"></textarea>
              <label for="content">Content</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <input id="tags" type="text" class="validate" />
              <label for="tags">Tags</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s12">
              <select>
                <option value="" disabled selected>
                  Choose your option
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <label>Materialize Select</label>
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
  );
};

export default CreatePost;
