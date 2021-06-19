import M from "materialize-css";
import PostForm from "./components/PostForm";

const PostCreate = () => {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll("select");
    M.FormSelect.init(elems, null);
  });

  return (
    <div id="grid-layouts" className="section scrollspy">
      <h5>Create Posts</h5>
      <PostForm />
    </div>
  );
};

export default PostCreate;
