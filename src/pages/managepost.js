const ManagePost = () => {
  return (
    <div>
      <div id="grid-layouts" class="section scrollspy">
        <h5>Manage Posts</h5>

        <table class="responsive-table highlight">
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
            <td>Published</td>
            <td>2021/06/18 12:40:34 PM</td>
            <td></td>
          </tr>
          <tr>
            <td>Alan</td>
            <td>Published</td>
            <td>2021/06/18 12:40:34 PM</td>
            <td></td>
          </tr>
          <tr>
            <td>Jonathan</td>
            <td>Archived</td>
            <td>2021/06/18 12:40:34 PM</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ManagePost;
