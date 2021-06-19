import './RightSideNavBar.css';
const RightSideNavBar = () => {
  return (
    <div id="grid-layouts" className="section scrollspy">
      <div className="row">
        <div className="portlet">
          <div className="portlet-heading">
            <div className="portlet-title">Demo</div>
          </div>
          <div className="portlet-content">
            <ul className="portlet-list">
              <li>
                <a href="/createpost">Create New Post</a>
              </li>
              <li>
                <a href="/managepost" className="">
                  Manage Posts
                </a>
              </li>
              <li>
                <a href="/managecomment" className="">
                  Approve Comments (0)
                </a>
              </li>
              <li>
                <a href="#browser-default">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="portlet">
          <div className="portlet-heading">
            <div className="portlet-title">Tags</div>
          </div>
          <div className="portlet-content">
            <span className="tag">
              <a href="/">blog</a>
            </span>
            <span className="tag">
              <a href="/">blog</a>
            </span>
            <span className="tag">
              <a href="/">blog</a>
            </span>
            {/* <ul className="section table-of-contents">
                  <li><a href="#valign" className="active">Blog</a></li>
                  <li><a href="#hiding" className="">Hiding/Showing Content</a></li>
                  <li><a href="#formatting" className="">Formatting</a></li>
                  <li><a href="#browser-default">Browser Defaults</a></li>
                </ul> */}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="portlet">
          <div className="portlet-heading">
            <div className="portlet-title">Recent Comments</div>
          </div>
          <div className="portlet-content">
            <ul className="portlet-list">
              <li>
                s3 Test Payment 2 on<a href="#valign">Alignment</a>
              </li>
              <li>
                Kumar Dhana on
                <a href="#hiding" className="">
                  Hiding/Showing Content
                </a>
              </li>
              <li>
                Tester on
                <a href="#formatting" className="">
                  Formatting
                </a>
              </li>
              <li>
                Tester on<a href="#browser-default">Browser Defaults</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RightSideNavBar;