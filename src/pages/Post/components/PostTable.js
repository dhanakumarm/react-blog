const PostTable = () => {
  return (
    <table className="responsive-table highlight">
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Create Time</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>ttest</td>
          <td>Published1</td>
          <td>2021/06/18 12:40:34 PM</td>
          <td>
            <a href="#!" className="grey-text text-darken-1">
              <i className="material-icons">view_list</i>
            </a>{" "}
            <a href="#!" className="grey-text text-darken-1">
              <i className="material-icons">edit</i>
            </a>
            <a href="#!" className="grey-text text-darken-1">
              <i className="material-icons">delete</i>
            </a>
          </td>
        </tr>
        <tr>
          <td>Alan</td>
          <td>Published</td>
          <td>2021/06/18 12:40:34 PM</td>
          <td>
            <a href="#!" className="grey-text text-darken-1">
              <i className="material-icons">view_list</i>
            </a>{" "}
            <a href="#!" className="grey-text text-darken-1">
              <i className="material-icons">edit</i>
            </a>
            <a href="#!" className="grey-text text-darken-1">
              <i className="material-icons">delete</i>
            </a>
          </td>
        </tr>
        <tr>
          <td>Jonathan</td>
          <td>Archived</td>
          <td>2021/06/18 12:40:34 PM</td>
          <td>
            <a href="#!" className="grey-text text-darken-1">
              <i className="material-icons">view_list</i>
            </a>{" "}
            <a href="#!" className="grey-text text-darken-1">
              <i className="material-icons">edit</i>
            </a>
            <a href="#!" className="grey-text text-darken-1">
              <i className="material-icons">delete</i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default PostTable;
